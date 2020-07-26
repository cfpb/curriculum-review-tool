var category="curriculum review tool interaction";

// Tracks analytics for links on page clicked
$('button.link-push-analytics').click(function() {
    var link_text = $(this).text().trim();
    var action="link clicked: " + link_text;
    buttonLinkClicked(action, link_text);
});

$('button.button-push-analytics').click(function() {
    var link_text = $(this).text().trim();
    var action="button clicked";
    buttonLinkClicked(action, link_text);
});

$('button.save-work-push-analytics').click(function() {
    var action = "save work modal"
    var label = $(this).text().trim();
    modelButtonClicked(action, label);
});

$('button.start-over-push-analytics').click(function() {
    var action = "Starting over modal"
    var label = $(this).text().trim();
    modelButtonClicked(action, label);
});

$('button.start-over-close-push-analytics').click(function() {
    var action = "Starting over modal"
    var label = $(this).text().trim();
    modelButtonClicked(action, label);
});

$('a.push-download-analytics').click(function() {
    var link_text = $(this).text().trim();
    var link_url = $(this).attr('href');
    sendAnalytics(link_text, link_url, "Downloads");
});

function buttonLinkClicked(action, link_text) {
    var label=link_text;
    sendAnalytics(action, link_text, category);
}

function modelButtonClicked(action, label) {
    sendAnalytics(action, label, category);
}

function sendAnalytics(action, label, category) {
    var data = {
        event:         category || "curriculum review tool interaction",
        action:        action.trim(),
        label:         label || ""
    }

    track(data.event, data.action, data.label);
}

function track( event, action, label ) {
    window.dataLayer.push( {
        event: event,
        action: action,
        label: label
    } );
}