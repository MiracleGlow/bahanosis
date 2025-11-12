from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# Filter custom untuk tahun sekarang di footer
@app.context_processor
def inject_now():
    return {'current_year': datetime.now().year}

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
