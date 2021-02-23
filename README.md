# A Drive Add On for Gmail Sidebar
A simple gmail add on to display all the drive folders and files in sidebar. 

**Problem:** G-Suite offers email, and GSuite also offers Google Drive. Everytime I need to open a file, I need to go to drive/sheets/doc and then find the file and navigate. Google also provides a sidebar to add a few plugins or shortcuts, but does not provide access to Google Drive automatically. So, I made one. And, the basic mechanics were way too simple. Took me half an hour. 


Written in App Script, a javascript like languages which Google provides an editor for. A lot of Google Sheets or Google Doc add on happen in Google App Script. 

# Steps

1. Navigate to https://script.google.com/home and from here create a new Project. 
2. Under project settings, check the "Show "appsscript.json" manifest file in editor". This is the file we need to start making changes to. The tutorials available are for old legacy editor - which works equally well. 
3. Open the 'appscript.json' and copy the contents of appscript.json of this repo. 
4. You can make changes to make addons under any google property that they show up in sidebar. I only needed it for Gmail so made one for those. To create add ons for all together, [you can check out the documentation here](https://developers.google.com/workspace/add-ons/concepts/homepages) 
5. Similarly, I only focused on add on that loads on homepage and hence no contextual trigger but a homepage trigger. My function is called 'driveFileList'
6. Create a new file and copy the contents of driveFileList.gs into that.
7. We need to add a service called Drive. Click on services to add Drive API service (called 'Drive'). The name you chose is used in the function called in #6
8. Deploy and you are set. 

# Enhancements
1. Can be beautified and different functions can be used to render the way files are diplayed. I need two things - file type and who is the owner (given a lot of shared docs are used by us). Can be done in multiple ways, add a button, add previews, add icons and so on. Infact, you can also create a new doc from the same sidebar, though I think sheets.new works pretty well. 
2. Show comments on docs or upload content to doc in one click. 
3. Enable sharing from right here. (The link we use is alternate link). 

### Feel free to take it away. Just wanted to nudge folks in this direction as I believe a lot of productivity can be unlocked if things merely show up in Sidebar. I scratched my itch, though I hope others would be happy to modify it and we can see some really amazing products.

