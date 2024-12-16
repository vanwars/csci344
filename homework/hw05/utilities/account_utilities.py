import os
import random
import re
from datetime import datetime, timedelta

from faker import Faker

import models
from models import db
from views import get_authorized_user_ids


def password_check_is_valid(password):
    """
    Verify the strength of 'password'
    Returns a dict indicating the wrong criteria
    A password is considered strong if:
        8 characters length or more
        1 digit or more
        1 symbol or more
        1 uppercase letter or more
        1 lowercase letter or more
    """

    # calculating the length
    length_error = len(password) < 8

    # searching for digits
    digit_error = re.search(r"\d", password) is None

    # searching for uppercase
    uppercase_error = re.search(r"[A-Z]", password) is None

    # searching for lowercase
    lowercase_error = re.search(r"[a-z]", password) is None

    # searching for symbols
    symbol_error = (
        re.search(r"[ !#$%&'()*+,-./[\\\]^_`{|}~" + r'"]', password) is None
    )

    # overall result
    password_ok = not (
        length_error
        or digit_error
        or uppercase_error
        or lowercase_error
        or symbol_error
    )
    return password_ok


def email_check_is_valid(email):
    # https://stackabuse.com/python-validate-email-address-with-regular-expressions-regex/
    regex = re.compile(
        r"([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])"
    )
    if re.fullmatch(regex, email):
        return True
    else:
        False


def generate_image(id: int = None, width: int = 300, height: int = 200):
    """
    Generates fake image:
        * id (int): image identifier
        * width (int): width of the pic
        * height (int): height of the pic
    Returns an image url.
    """
    image_id = id or random.randint(0, 1000)
    return "https://picsum.photos/{w}/{h}?id={id}".format(
        id=image_id, w=width, h=height
    )


def create_fake_posts(user):
    fake = Faker()
    posts = []
    for i in range(0, 5):
        time_of_post = datetime.now() - timedelta(hours=random.randint(1, 100))
        post = models.Post(
            generate_image(width=600, height=430),
            user.id,
            caption=fake.sentence(nb_words=random.randint(15, 50)),
            pub_date=time_of_post,
        )
        db.session.add(post)
        posts.append(post)
    db.session.commit()
    return posts


def create_fake_story(user):
    fake = Faker()
    time_of_post = datetime.now() - timedelta(hours=random.randint(1, 100))
    story = models.Story(
        fake.sentence(nb_words=random.randint(10, 30)),
        user.id,
        pub_date=time_of_post,
    )
    db.session.add(story)
    db.session.commit()


def follow_some_users(user):
    users = models.User.query.all()
    accounts_to_follow = []
    while len(accounts_to_follow) < 3:
        candidate_account = random.choice(users)
        if (
            candidate_account != user
            and candidate_account not in accounts_to_follow
        ):
            following = models.Following(user.id, candidate_account.id)
            db.session.add(following)
            accounts_to_follow.append(candidate_account)
    db.session.commit()


def like_every_third_post(user):
    ids_for_me_and_my_friends = get_authorized_user_ids(user)
    posts = models.Post.query.filter(
        models.Post.user_id.in_(ids_for_me_and_my_friends)
    )
    for i in range(0, len(posts.all())):
        if i % 3 == 0:
            like = models.LikePost(user.id, posts[i].id)
            db.session.add(like)
    db.session.commit()


def bookmark_every_fourth_post(user):
    ids_for_me_and_my_friends = get_authorized_user_ids(user)
    posts = models.Post.query.filter(
        models.Post.user_id.in_(ids_for_me_and_my_friends)
    )
    for i in range(0, len(posts.all())):
        if i % 4 == 0:
            bookmark = models.Bookmark(user.id, posts[i].id)
            db.session.add(bookmark)
    db.session.commit()


def comment_on_every_fifth_post(user):
    fake = Faker()
    ids_for_me_and_my_friends = get_authorized_user_ids(user)
    posts = models.Post.query.filter(
        models.Post.user_id.in_(ids_for_me_and_my_friends)
    )
    for i in range(0, len(posts.all())):
        if i % 5 == 0:
            comment = models.Comment(
                fake.sentence(nb_words=random.randint(15, 50)),
                user.id,
                posts[i].id,
            )
            db.session.add(comment)
    db.session.commit()


def like_on_every_fifth_comment(user):
    ids_for_me_and_my_friends = get_authorized_user_ids(user)
    comments = models.Comment.query.filter(
        models.Comment.user_id.in_(ids_for_me_and_my_friends)
    )
    for i in range(0, len(comments.all())):
        if i % 5 == 0:
            like = models.LikeComment(user.id, comments[i].id)
            db.session.add(like)
    db.session.commit()


def create_starter_data(user):
    print("Creating fake posts...")
    create_fake_posts(user)

    print("Creating a fake story...")
    create_fake_story(user)

    print("Assigning users some accounts to follow...")
    follow_some_users(user)

    print("Creating fake post likes...")
    like_every_third_post(user)

    print("Creating fake bookmarks...")
    bookmark_every_fourth_post(user)

    print("Creating fake comments...")
    comment_on_every_fifth_post(user)

    print("Creating fake comment likes...")
    like_on_every_fifth_comment(user)


def delete_account(user):
    models.User.query.filter_by(id=user.id).delete()
    db.session.commit()
