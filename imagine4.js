var s = document.createElement("style");
s.innerHTML = 
".user-name, .member-username-inner, .guild-inner > a, .channel-voice-states > li > div > span, .account .username, .account .discriminator, .member-activity strong, .typing strong {" +
"    font-size: 0 !important;" +
"}" +
".user-name:after, .member-username-inner:after, .channel-voice-states > li > div > span:after, .account .username:after, .member-activity strong:after, .typing strong:after {" +
"    content: \"Imagine4\";" +
"}" +
".account .discriminator:after {" +
"    content: \"#8208\";" +
"}" +
".account .discriminator:after, .bot-tag:after {" +
"    font-size: 10px;" +
"}" +
".member-activity strong:after {" +
"    font-size: 11px;" +
"}" +
".channel-voice-states > li > div > span:after, .typing strong:after {" +
"    font-size: 13px;" +
"}" +
".username:after {" +
"    font-size: 14px;" +
"}" +
".user-name, .member-username-inner:after {" +
"    color: #188a08 !important;" +
"}" +
".user-name:after, .member-username-inner:after {" +
"    font-size: 16px;" +
"}" +
".avatar-large, .avatar-small {" +
"    background-image: url(\"https://cdn.discordapp.com/avatars/136611352692129792/41be7e09f1cbb4e85f8a926409eedbd3.png?size=256\") !important;" +
"}" +
".bot-tag {" +
"    display: none;" +
"}";
document.head.appendChild(s);