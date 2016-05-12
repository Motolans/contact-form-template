"use strict";

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Jumbo, null),
      React.createElement(Who, null),
      React.createElement(What, null),
      React.createElement(Why, null),
      React.createElement(How, null),
      React.createElement(Footer, null)
    );
  }
});

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-inverse clearfix" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          ),
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            React.createElement("img", { className: "brand", src: "http://www.hookandshadow.com/img/HSLogo.png" })
          )
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "myNavbar" },
          React.createElement(
            "ul",
            { className: "nav navbar-nav" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#who" },
                "Who We Are"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#what" },
                "What We Do"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#why" },
                "Why You Need Us"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#how" },
                "How We Can Help"
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "nav navbar-nav navbar-right" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "tel:18453324627" },
                React.createElement("span", { className: "fa fa-phone-square" }),
                " Call"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "mailto:info@hookandshadow.com" },
                React.createElement("span", { className: "fa fa-envelope" }),
                " Email"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://www.facebook.com/hookandshadowdevs" },
                React.createElement("span", { className: "fa fa-facebook-square" }),
                " Facebook"
              )
            )
          )
        )
      )
    );
  }
});

var Jumbo = React.createClass({
  displayName: "Jumbo",

  render: function render() {
    return React.createElement(
      "div",
      { className: "jumbotron" },
      React.createElement(
        "div",
        { className: "intro-box" },
        React.createElement(
          "h1",
          { className: "brand-title" },
          "We Are Hook & Shadow"
        ),
        React.createElement(
          "p",
          { className: "tagline" },
          "The best web development team in the Catskills for developing responsive, mobile-first web sites and applications that increase consumer awareness and audience interaction."
        )
      )
    );
  }
});

var Who = React.createClass({
  displayName: "Who",

  render: function render() {
    return React.createElement(
      "section",
      { className: "who" },
      React.createElement("a", { name: "who" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h3",
          { className: "section-title" },
          "Who We Are..."
        ),
        React.createElement(
          "p",
          null,
          "We are Hook & Shadow. We are a collective of programming and design professionals working together to create the best web sites and web applications for the Catskill area's business community."
        ),
        React.createElement(
          "p",
          null,
          "Hook & Shadow's team boasts bleeding edge technology skills and design practices and each of our specialists are passionate about continuous learning and improvement to bring the finest and newest technology and designs to our clients."
        ),
        React.createElement(
          "h5",
          null,
          "Hook & Shadow is:"
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "Ray - Front End Architecture and Scripting, UI, UX"
          ),
          React.createElement(
            "li",
            null,
            "Jordi - Social Media and Marketing"
          ),
          React.createElement(
            "li",
            null,
            "Moto - Data, Back End Architecture and Scripting"
          ),
          React.createElement(
            "li",
            null,
            "Kat - Copy writing and editing"
          ),
          React.createElement(
            "li",
            null,
            "Maureen - Visual Design"
          ),
          React.createElement(
            "li",
            null,
            "Isaac - Consulting Senior Developer"
          ),
          React.createElement(
            "li",
            null,
            "Thorn - Lead Developer and General Manager"
          )
        )
      )
    );
  }
});

var What = React.createClass({
  displayName: "What",

  render: function render() {
    return React.createElement(
      "section",
      { className: "what" },
      React.createElement("a", { name: "what" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h3",
          { className: "section-title" },
          "What We Do..."
        ),
        React.createElement(
          "p",
          null,
          "Hook & Shadow listens to you. We hear your story, your needs, and your goals, and we create effective solutions that work for your budget."
        ),
        React.createElement(
          "p",
          null,
          "Our work is customized for you and your business - from simple scripts to custom applications for your sales and customer service teams to a website that stands out. Hook & Shadow captures and presents your vision and mission in a way that resonates with your employees and potential clients. We take great pride in having the skills and the imagination to make your presence on the web a unique and engaging experience for your audience."
        )
      )
    );
  }
});

var Why = React.createClass({
  displayName: "Why",

  render: function render() {
    return React.createElement(
      "section",
      { className: "why" },
      React.createElement("a", { name: "why" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h3",
          { className: "section-title" },
          "Why You Need Us..."
        ),
        React.createElement(
          "p",
          null,
          "You have your business and the expertise required to run it. Our business is the internet. The public facing image that you create on the internet will likely be the first impression that a potential client experiences. Cell phones are the technology most used for accessing the internet as a consumer looks for a place to purchase the goods or services they are looking for with IMMEDIATE NEED. And when customers are looking for your product or service, you've already gone 90% of the way toward the sale. Are your clients finding you on the web? When they do are they having an experience that represents your dedication to quality? Are they able to take action when they are in the \"buy zone\"?"
        ),
        React.createElement(
          "p",
          null,
          "You need a custom website and applications that engage your clients or membership. Your professional level business needs more than a template, pre-made website, or blog. When you are ready to find new sales channels, profit streams, and consumer audience engagements you need to call in the experts at Hook & Shadow."
        )
      )
    );
  }
});

var How = React.createClass({
  displayName: "How",

  render: function render() {
    return React.createElement(
      "section",
      { className: "how" },
      React.createElement("a", { name: "how" }),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h3",
          { className: "section-title" },
          "How We Can Help..."
        ),
        React.createElement(
          "p",
          null,
          "We apply up-to-date technology to create solutions that achieve your goals and we create functional interfaces and applications that increase the effectiveness and automation of processes and interactions."
        ),
        React.createElement(
          "p",
          null,
          "Having a website that is mobile ready, SEO optimized, and social media integrated means you have a media marketing tool available 24 hours a day, providing your clients with information and a place to buy instantly."
        ),
        React.createElement(
          "p",
          null,
          "During a consultation, Hook & Shadow will help you to invent new ways of interacting with your clients, employees, membership, or other audience type. We'll architect custom applications that facilitate your processes and offer more to your people who matter."
        )
      )
    );
  }
});

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "footer",
      { className: "pager-footer" },
      React.createElement(
        "p",
        { className: "copy" },
        "© 2016 Hook & Shadow. All Rights Reserved."
      ),
      React.createElement(
        "p",
        { className: "phone" },
        "1 (845) 332-4627"
      ),
      React.createElement(
        "p",
        { className: "email" },
        "info@hookandshadow.com"
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));