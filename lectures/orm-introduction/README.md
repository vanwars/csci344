## SQL Setup

Open your terminal. From any directory, type:
```
psql -U postgres
```

Once you're on the psql command prompt, create a new database called `orm_test`:

```sql
create database orm_test;
```

Once you get a "Database Created" message, exit `psql`.

## Flask / Python Setup
Download the sample files (`orm-introduction` folder) and save them to your lectures folder.

### Set Up Your Virtual Environment
Open the terminal and navigate to your `orm-introduction` folder. Then, set up a virtual environment and install the dependencies as follows (depending on your operating system):

#### For Mac, Unix, Linux, or GitBash

```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt    # install dependencies
```

#### For Windows Powershell or Command Prompt

```bash
# create the virtual environment
py -m venv env  

# run the activate.bat script as follows:
env\Scripts\activate

# and finally, install the Python dependencies
py -m pip install -r requirements.txt
```

### Update your database connection string
Open the `.env` file and modify your connection string so that your postgresql password is reflected (versus 12345). So, instead of...

```
DB_URL=postgresql://postgres:12345@localhost/orm_test
```

You will change it to...

```
DB_URL=postgresql://postgres:your_password@localhost/orm_test   # but replace your_password
```

### Populate your database
From the terminal, build your database as follows (from the command prompt from within the `orm-introduction` folder).

```bash
python populate.py
```

### Run Your Flask Web Server

When you're done, try running your flask app from your command line:


```bash
flask run --debug

# if you named your app something other than app.py (say, hello.py) type this:
# flask flask --app hello run --debug
```

You should see the following output:
```bash
 * Serving Flask app "app.py" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 273-580-071
 ```

 Navigate to <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a>, and you should see a screen that lists the exercises that you are to complete:
