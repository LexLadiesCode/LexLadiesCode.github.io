# LexLadiesCode

This is the main website for the Lex Ladies Coding Club in Lexington, KY. To view the site go to http://lexladiescode.github.io/

## First-time Setup

1. [Install Ruby](https://www.ruby-lang.org/en/installation/). Use RubyInstaller for Windows.
1. On Windows, also install the [RubyInstaller DevKit](http://rubyinstaller.org/downloads/). Extract it to a folder called DevKit in your Downloads folder.
    1. Open the Command Prompt (type `cmd` in Start Menu search field).
    1. `cd \Users\your_user_name\Downloads\DevKit` -- replace `your_user_name` with whatever your Windows user name is.
    1. `ruby dk.rb init`
    1. `ruby dk.rb install`
    1. `gem install bundler`

## How to Run

1. In OS X, open the Terminal app (found under Applications > Utilties). In Windows, open the Command Prompt (type `cmd` in Start Menu search field).
1. Navigate to where this repository is checked out using the `cd` command in the terminal/prompt. For example, in Windows: `cd \Users\your_user_name\Documents\GitHub\LexLadiesCode.github.io`
1. `bundle` to install necessary gems, including Jekyll.
1. `jekyll serve -w`
1. Visit `http://localhost:4000` in your browser to view the site.

## How To Contribute

### Jekyll

This site uses Jekyll to create static HTML pages. Read more about Jekyll at http://jekyllrb.com/

### GitHub Pages

The site is hosted on GitHub via the awesome GitHub Pages feature. You push your changes and GitHub rebuilds the pages using Jekyll. Read more about how it works here: https://pages.github.com/

### Bootstrap

The site uses Twitter Bootstrap for style. Try it out for yourself! http://getbootstrap.com/

### Markdown

Pages in a Jekyll site can be created using basic HTML, Markdown, or Textile. We'll use Markdown heavily. Markdown is a way to turn simple text into HTML. Everything you'd want to know is here: https://daringfireball.net/projects/markdown/

### Liquid

We'll insert some programming logic into our website using Liquid. More about that soon! Check out index.html for a look. http://docs.shopify.com/themes/liquid-basics
