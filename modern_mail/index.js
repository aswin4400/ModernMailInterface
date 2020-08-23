var NewComponent = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>index.html</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <div className="one">
          <div className="profile">
            <img src="face.jpeg" />
            <div className="name-account">
              <div className="name">Erica Clapton</div>
              <div className="account">Pro account</div>
            </div>
          </div>
          <div className="tabs">
            <div className="inner-tab">
              <img src="energy.svg" />
              <div className="text">Inbox</div>
              <div className="number">32</div>
            </div>
            <div className="inner-tab">
              <img src="send.svg" />
              <div className="text not-active">Sent</div>
            </div>
            <div className="inner-tab">
              <img src="draft.svg" />
              <div className="text not-active">Draft</div>
            </div>
            <div className="inner-tab">
              <img src="calendar.svg" />
              <div className="text not-active">Reminder</div>
              <div className="number reminder not-active">5</div>
            </div>
            <div className="inner-tab">
              <img src="spam.svg" />
              <div className="text not-active">Spam</div>
            </div>
            <div className="inner-tab">
              <img src="book.svg" />
              <div className="text not-active">Mark</div>
            </div>
          </div>
          <div className="bold-tabs">
            <div className="bold-tab">
              <div className="text">WORK</div>
              <img src="more.svg" />
            </div>
            <div className="line" />
          </div>
          <div className="tabs">
            <div className="inner-tab">
              <div className="text not-active">Mark Monsetrat</div>
              <div className="number works">3</div>
            </div>
            <div className="inner-tab">
              <div className="text not-active">Jeremy Renner</div>
            </div>
          </div>
          <div className="bold-tabs">
            <div className="bold-tab">
              <div className="text">TAGS</div>
            </div>
            <div className="line" />
          </div>
          <div className="tags">
            <div className="tag">
              <div className="dot client" />
              <div className="text">Client</div>
            </div>
            <div className="tag">
              <div className="dot work" />
              <div className="text">Work</div>
            </div>
            <div className="tag">
              <div className="dot family" />
              <div className="text">Family</div>
            </div>
            <div className="tag">
              <div className="dot friends" />
              <div className="text">Friends</div>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="search-filter-outer">
            <div className="search-filter">
              <input type="text" placeholder="search for objects etc." />
              <img src="filter.svg" />
            </div>
            <div className="line" />
          </div>
          <div className="inbox-items-outer">
            <div className="inbox-items">
              <div className="dot" />
              <div className="name-message">
                <div className="name">Marta Lichardson</div>
                <div className="subject">Design new project "Anama"</div>
                <div className="message">
                  How long will it take you to transfer all the data to us...
                </div>
              </div>
              <div className="time">3 hours ago</div>
            </div>
          </div>
          <div className="inbox-items-outer open">
            <div className="inbox-items opened">
              <div className="name-message not-online">
                <div className="name-icon">
                  <div className="name">Derek Lichardson</div>
                  <img src="star.svg" />
                </div>
                <div className="subject">Design Template</div>
                <div className="message files">
                  <div className="file template">Template.psd</div>
                  <div className="file description">Description.doc</div>
                </div>
              </div>
              <div className="time">2 days ago</div>
            </div>
            <div className="line" />
          </div>
          <div className="inbox-items-outer">
            <div className="inbox-items">
              <div className="name-message not-online">
                <div className="name-icon new">
                  <div className="name">Derek Lichardson</div>
                  <div className="text">NEW</div>
                </div>
                <div className="subject">Design new project "Anama"</div>
                <div className="message">
                  How long will it take you to transfer all the data to us...
                </div>
              </div>
              <div className="time">3 hours ago</div>
            </div>
            <div className="line" />
          </div>
          <div className="inbox-items-outer">
            <div className="inbox-items">
              <div className="name-message not-online">
                <div className="name-icon new">
                  <div className="name">Derek Lichardson</div>
                  <div className="text">NEW</div>
                </div>
                <div className="subject">Design new project "Anama"</div>
                <div className="message">
                  How long will it take you to transfer all the data to us...
                </div>
              </div>
              <div className="time">3 hours ago</div>
            </div>
            <div className="line" />
          </div>
          <div className="inbox-items-outer">
            <div className="inbox-items">
              <div className="name-message not-online">
                <div className="name-icon new">
                  <div className="name">Derek Lichardson</div>
                  <div className="text">NEW</div>
                </div>
                <div className="subject">Design new project "Anama"</div>
                <div className="message">
                  How long will it take you to transfer all the data to us...
                </div>
              </div>
              <div className="time">3 hours ago</div>
            </div>
            <div className="line" />
          </div>
        </div>
        <div className="three">
          <div className="top">
            <img src="menu.svg" />
            <div className="name-email-icon">
              <div className="name-email">
                <div className="name">Derek Lichardson</div>
                <div className="email">derek.lichardson@gmail.com</div>
              </div>
              <img src="star.svg" />
            </div>
            <div className="icon-set">
              <img src="filter_2.svg" />
              <img src="reply.svg" />
              <img src="delete.svg" />
              <img src="menu_2.svg" />
            </div>
          </div>
          <div className="bottom">
            <div className="subject">
              <div className="subject-name">Design template</div>
            </div>
            <div className="line" />
            <div className="date-container">
              <div className="date">2 June 2020</div>
            </div>
            <div className="message-time-container">
              <div className="message-container">
                <b>Hello Aswin Rajasekharan</b>
                <p>
                  Cascading Style Sheets is a style sheet language used for
                  describing the presentation of a document written in a markup
                  language like HTML. CSS is a cornerstone technology of the
                  World Wide Web, alongside HTML and JavaScript.
                </p>
                <p>
                  Use the online image color picker right to select a color and
                  get the HTML Color Code of this pixel. Also you get the HEX
                  color code value, RGB value and HSV value. You can put a
                  picture url in the textbox below or upload your own image.
                  (for example an screenshot of your desktop). Or use an website
                  url, you will see a thumbnail on the right side.
                </p>
              </div>
              <div className="time-container">
                <div className="time">11:30</div>
              </div>
            </div>
            <div className="dp-files">
              <img src="face.jpeg" />
              <div className="file">
                <div className="type-icon">
                  <div>PSD</div>
                </div>
                <div className="name-type">
                  <div className="name">Template</div>
                  <div className="type">PSD</div>
                </div>
                <img src="download.svg" />
              </div>
              <div className="file">
                <div className="type-icon">
                  <div>ZIP</div>
                </div>
                <div className="name-type">
                  <div className="name">Description</div>
                  <div className="type">ZIP</div>
                </div>
                <img src="download.svg" />
              </div>
            </div>
            <div className="message-time-container">
              <img src="face.jpeg" />
              <div className="message-container">
                <b>Hello Aswin Rajasekharan</b>
                <p>
                  Cascading Style Sheets is a style sheet language used for
                  describing the presentation of a document written in a markup
                  language like HTML. CSS is a cornerstone technology of the
                  World Wide Web, alongside HTML and JavaScript.
                </p>
              </div>
              <div className="time-container">
                <div className="time">11:30</div>
              </div>
            </div>
            <div className="message-time-container textinput">
              <textarea style={{ overflow: "hidden" }} defaultValue={""} />
              <div className="symbols">
                <div className="subject">Subject:</div>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi" selected>
                    Design Template
                  </option>
                </select>
                <div className="icons">
                  <img src="photo.svg" />
                  <img src="attach.svg" />
                  <button className="send">send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
