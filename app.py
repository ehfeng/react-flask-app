from flask import Flask, render_template


app = Flask(__name__, static_url_path='', static_folder='static/dist')


@app.route("/")
def hello():
    return render_template('index.html')
