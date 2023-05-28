var imagine4css = (function() {
  "use strict";
  
  var imagine4css = {
  css:
    '#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.success strong,.activity strong,.avatar-large,.channel-activity strong,.channel-name.channel-private,.channel-voice-states>li>div>span,.channel.private .channel-name,.chat .welcome-message h1,.connected-account-name,.containerDefault-7RImuF .draggable-3SphXU>div>:nth-child(2),.context-menu .item-group .item.danger>span,.discrim-xHdOK3,.discriminator,.display-username,.displayed-nick,.emoji-row .emoji-row-text,.flexChild-1KGW5q:nth-child(2) .ui-quick-select-value,.friends-row .status-text>strong,.guild-header span,.guild-inner>a,.guild-name,.guild-nick,.guild-settings-audit-logs-user-filter-popout .user-text .discriminator,.guild-settings-audit-logs-user-filter-popout .user-text .username,.guild-settings-banned-user-modal .user-discrim,.guild-settings-banned-user-modal .user-username,.guild-settings-members-member .name-and-tag .name,.guild-settings-members-member .name-and-tag .tag,.member-activity strong,.member-role .name,.member-username-inner,.mention,.name-1VHFX9>span,.nickname,.private .empty-message strong,.scroller>header,.search-result-name,.selectable-prgIYK,.system-message .system-message-content a:first-of-type,.typing strong,.ui-role-list-role>div:first-child,.user-name,.userHook-DFT5u7>span:first-child,.username{font-size:0!important}.guild-settings-members-member .name-and-tag .name,.member-role:not(.member-role-add):nth-child(1),.member-username-inner,.system-message .system-message-content a:first-of-type,.user-name{color:#0ce1f1!important}:root{--username:"Imagine4";--discriminator:"8208";--profile-picture:url(https://cdn.discordapp.com/avatars/136611352692129792/a_44d82a7e3abd45e71ea24ba340f667d8.gif?size=256);--emailaddress:"idontactuallyknowheremailsothisisjustfilleriguess@gmail.com";--twitch-name:"imagine4d";--twitter-name:"iAmAFig";--youtube-name:"Imagine 4"}.mention{line-height:0}.private-channels .channel .channel-name{line-height:1.4}.channel-members .member .member-activity{line-height:8px}.channel-members .member .member-username-inner,.popout .username{line-height:12px!important}.popout .nickname{line-height:16px!important}.activity strong:before,.channel-activity strong:before,.channel-name.channel-private:after,.channel-voice-states>li>div>span:before,.channel.private .channel-name:before,.containerDefault-7RImuF .draggable-3SphXU>div>:nth-child(2):before,.displayed-nick:before,.emoji-row .emoji-row-text:before,.flexChild-1KGW5q:nth-child(2) .ui-quick-select-value:before,.friends-row .status-text>strong:before,.guild-header span:before,.guild-name:before,.guild-nick:before,.guild-settings-audit-logs-user-filter-popout .user-text .username:before,.guild-settings-banned-user-modal .user-username:before,.guild-settings-members-member .name-and-tag .name:before,.member-activity strong:before,.member-username-inner:before,.name-1VHFX9>span:first-child:before,.nickname:before,.scroller>header:before,.search-result-name:before,.system-message .system-message-content a:first-of-type:before,.typing strong:before,.ui-form-item:first-child .selectable-prgIYK:before,.user-name:before,.userHook-DFT5u7>span:first-child:before,.username:before{content:var(--username)}.mention:before,.private .empty-message strong:before{content:"@" var(--username)}.chat .welcome-message h1:before{content:"Welcome to the server, " var(--username)"!"}.context-menu .item-group:nth-child(3) .item.danger>span:before,.context-menu .item-group:nth-child(4) .item.danger>span:before{content:"Kick " var(--username)}.context-menu .item-group:nth-child(3) .item.danger:last-child>span:before,.context-menu .item-group:nth-child(4) .item.danger:last-child>span:before{content:"Ban " var(--username)}.discrim-xHdOK3:before,.discriminator:before,.guild-settings-audit-logs-user-filter-popout .user-text .discriminator:before,.guild-settings-banned-user .username .discrim:before,.guild-settings-banned-user-modal .user-discrim:before,.ui-form-item:first-child .selectable-prgIYK>span:before{content:"#" var(--discriminator)}#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.success strong:before,.display-username:before,.name-1VHFX9>span:last-child:before{content:var(--username)"#" var(--discriminator)}.guild-settings-members-member .name-and-tag .tag:before{content:"@" var(--username)"#" var(--discriminator)}.connected-account-name:before{content:var(--username)}.connected-account-icon[src="/assets/d62770cb3449a04c7292fc2ad7a9ffd9.png"]+.connected-account-name-inner .connected-account-name:before{content:var(--twitch-name)}.connected-account-icon[src="/assets/c795f9ef8be0d19a0555ee96213abd00.png"]+.connected-account-name-inner .connected-account-name:before{content:var(--twitter-name)}.connected-account-icon[src="/assets/3f902475b3576b6d008f27d1731e4c86.png"]+.connected-account-name-inner .connected-account-name:before{content:var(--youtube-name)}.ui-form-item:last-child .selectable-prgIYK:before{content:var(--emailaddress)}.member-role:nth-child(1) .name:before,.ui-role-list-role:nth-child(1)>div:first-child:before{content:"Stemff"}.member-role:nth-child(2) .name:before,.ui-role-list-role:nth-child(2)>div:first-child:before{content:"#TeamYessoan"}.member-role:nth-child(3) .name:before,.ui-role-list-role:nth-child(3)>div:first-child:before{content:"I bought a thing with Tant\'s face"}.accountDetails-15i-_e .discriminator:before,.bot-tag:before,.channel-activity strong:before{font-size:10px}.guild-nick:before,.member-activity strong:before{font-size:11px}.discord-tag .discriminator:before,.discrim-xHdOK3:before,.guild-settings-audit-logs-user-filter-popout .user-text .discriminator:before,.member-role .name:before,.scroller>header:before,.ui-role-list-role>div:first-child:before{font-size:12px}.channel-voice-states>li>div>span:before,.context-menu .item-group .item.danger>span:before,.flexChild-1KGW5q:nth-child(2) .ui-quick-select-value:before,.typing strong:before{font-size:13px}#friends .friends-table .friend-table-add-wrapper .friend-table-add-description.success strong:before,.channel-textarea-autocomplete .username:before,.channel.private .channel-name:before,.container-iksrDt .username:before,.containerDefault-7RImuF .draggable-3SphXU>div>:nth-child(2):before,.guild-settings-members-member .name-and-tag .tag:before{font-size:14px}.activity strong:before,.mention:before,.search-result-name:before{font-size:15px}#friends .friends-table .friends-row .discord-tag .username:before,#user-profile-modal .header .header-info .header-info-inner .discord-tag .discriminator:before,.channel-members .member .member-username-inner:before,.connected-account-name:before,.display-username:before,.displayed-nick:before,.emoji-row .emoji-row-text:before,.friends-row .status-text>strong:before,.guild-header span:before,.guild-name:before,.guild-settings-audit-logs-user-filter-popout .user-text .username:before,.guild-settings-banned-user .username .discrim:before,.guild-settings-banned-user .username:before,.guild-settings-members-member .name-and-tag .name:before,.invite-settings-invite-row .username:before,.name-1VHFX9>span:before,.nickname:before,.popout .discord-tag .username:before,.private .empty-message strong:before,.system-message .system-message-content a:first-of-type:before,.ui-form-item .selectable-prgIYK:before,.ui-form-item .selectable-prgIYK>span:before,.user-name:before,.userHook-DFT5u7>span:first-child:before{font-size:16px}#user-profile-modal .header .header-info .header-info-inner .discord-tag .username:before,.chat .welcome-message h1:before{font-size:18px}.channel-name.channel-private:after,.channel-name.channel-private:before{font-size:20px}.guild-settings-banned-user-modal .user-discrim:before,.guild-settings-banned-user-modal .user-username:before{font-size:24px}.channel-name.channel-private:after{margin-left:-4px;line-height:2}.guild-name>.username:before{font-size:0}.member-role:not(.member-role-add):nth-child(1),.ui-role-list-role:nth-child(1){background:rgba(12,225,241,.1)!important;border:1px solid rgba(12,225,241,.5)!important}.member-role:not(.member-role-add):nth-child(2),.ui-role-list-role:nth-child(2){background:rgba(208,95,3,.1)!important;border:1px solid rgba(208,95,3,.5)!important}.member-role:not(.member-role-add):nth-child(2){color:#d05f03!important}.member-role:not(.member-role-add):nth-child(3),.ui-role-list-role:nth-child(3){background:rgba(80,244,7,.1)!important;border:1px solid rgba(80,244,7,.5)!important}.member-role:not(.member-role-add):nth-child(3){color:#50f407!important}.mention{background:rgba(115,139,215,.1);color:#7289da!important;transition:background-color .05s,color .05s}.mention:hover{background:rgba(115,139,215,.7);color:#fff}.mentioned .mention{background:0 0}.mentioned .mention:hover{color:#7289da!important}.avatar-1BXaQj,.avatar-large,.avatar-popout,.avatar-profile,.avatar-small,.avatar-uploader-inner,.avatar-xsmall,.avatar-xxlarge,.avatarContainer-303pFz>div{background-image:var(--profile-picture)!important}.display-avatar{content:var(--profile-picture)!important}.channel-members-wrap .member{height:40px}.member-role{height:12px}.ui-role-list-role{height:16px;padding-top:4px}.bot-tag,.botTag-1OwMgs,.member-role:nth-child(3)~.member-role,.note,.ui-role-list-role:nth-child(3)~.ui-role-list-role{display:none}.private .topic{height:0}.popout .quick-message-wrapper>::-webkit-input-placeholder,.popout .quick-message-wrapper>::placeholder{color:transparent}' +
    "#imagine4css-button{background:#43b581!important;border:1px solid #43b581!important}",
  
  on: function() {
      this.stylesheet.innerHTML = this.css;
    },
  off: function() {
      this.stylesheet.innerHTML = "";
    },
  toggle: function() {
      if (this.stylesheet.innerHTML) {
        this.off();
      } else {
        this.on();
      }
    },
  
  stylesheet: (function() {
      var element = document.createElement("style");
      element.id = "imagine4css-sheet";
      replaceIfIDExists("imagine4css-sheet", element, document.head);
      return element;
    })()
  };

  var guildScroller = document.querySelector(".guilds-wrapper .guilds");
  
  var toggleButton = document.createElement("button");
  toggleButton.style.width = "100px";
  toggleButton.style.maxWidth = "90%";
  toggleButton.style.display = "block";
  toggleButton.style.marginTop = "50px";
  toggleButton.style.marginLeft = "auto";
  toggleButton.style.marginRight = "auto";
  
  toggleButton.style.background = "#2f3136";
  toggleButton.style.transition = "background .1s ease, border .1s ease";
  toggleButton.style.border = "1px solid #36393e";
  toggleButton.style.borderRadius = "3px";
  toggleButton.style.color = "#fff";
  toggleButton.style.cursor = "default";
  
  toggleButton.id = "imagine4css-button";
  replaceIfIDExists("imagine4css-button", toggleButton, guildScroller);
  toggleButton.onclick = function () {
    imagine4css.toggle();
  };
  toggleButton.textContent = "Imagine4";
  
  guildScroller.appendChild(toggleButton);

  /* welcome *
  var codeCSS = "background: #333; color: #fff; padding: initial 5px; border-radius: 3px;";
  
  console.log(
    " %cimagine4.css" +
    "\n%cUse the power of CSS to make everybody Imagine4!" +
    "\n%cThis plugin is represented by the object %cimagine4css%c." +
    "\n\n %cimagine4css.on%c function (void return). Enables the CSS if it is not currently running." +
    "\n %cimagine4css.off%c function (void return). Disables the CSS if it is currently running." +
    "\n %cimagine4css.toggle%c function (void return). Toggles the CSS if on or off." +
    "\n %cimagine4css.css%c string. String that contains the CSS that is parsed to produce the effects." +
    "\n %cimagine4css.stylesheet%c Node. Element where the CSS is located.",
  
    "font-size: 24px;",
    "font-size: 16px;",
    "",
    codeCSS,
    "",
    codeCSS,
    "",
    codeCSS,
    "",
    codeCSS,
    "",
    codeCSS,
    "",
    codeCSS,
    ""
  );*/
  
  function replaceIfIDExists(id, newElement, parentElement) {
    var oldElement = document.querySelector("#" + id);
    if (oldElement) {
      parentElement.replaceChild(newElement, oldElement);
      return true;
    } else {
      parentElement.appendChild(newElement);
      return false;
    }
  }
  
  return imagine4css;
})();