/**
 * Queries the drive and returns the file list sorted in the order of last opened.
 * I just create a widget for each of the result and show its type, title, and owner.
 *
 * The reason for replace function in line 22 is because I could get just the spreadsheet or the doc part.
 * This also assumes that file is owned by the first member in the owners array.

 * @param {Object} event Event containing the message ID and other context.
 * @returns {Card[]}
 */
function getContextualAddOn(event) {
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newCardHeader().setTitle('Your Documents'));
  var section = CardService.newCardSection();

  var files = Drive.Files.list({
    fields: 'nextPageToken, items(id, title, mimeType,alternateLink,ownedByMe,owners)',
    maxResults: 30
  }).items;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    Logger.log('%s %s %s %s %s %s', file.title, file.id, file.mimeType,file.ownedByMe, file.alternateLink, file.owners);
    section.addWidget(CardService.newDecoratedText().setText(file.title)
    .setTopLabel(file.mimeType.replace('application/vnd.google-apps.','')).setOpenLink(
    CardService.newOpenLink()
    .setUrl(file.alternateLink)
        ).setBottomLabel('Owned by ' + file.owners[0]['displayName']));

  }

  card.addSection(section);

  return [card.build()];
}
