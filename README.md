# Etiquette Society - Upkeep

This is how the Etiquette Society website should be upkept

[Changes should be made at least once per month, if not more often]

## General Upkeep

1. Add New Members To Assets Folder
2. Add New Members To Specific List In Metadata
3. Change Featured Member In Metadata
4. Add Latest Episodes
5. Change Latest Podcast Episode
6. Change Assets/Podcasts/Main.png
7. Add New Event To Events Folder 
8. Add New Event In Metadata
9. Update Metadata Metadata
10. Test & Push

## New Member

When a new member is added to the group, there are a few steps that need to
be taken care of. 

1. First of all, create him a new folder in the assets folder under members
with his slug. This should include both a main.jpg with his main picture,
as well as a member.md
2. In his member.md ensure that all the data is correct. This includes:
   - name: Full name
   - mainImage: "main.jpg"
   - description: If description is empty, the member will not have a member
   page
   - rank: Founder | Patron | Member | Affiliate
   - instagram: Link to his instagram account. Only important if featured.
3. Make sure to add the member under the correct list in the metadata.md file
based on his rank in the group.

## Featured Member

Time to make sure the member is valid

1. Ensure all the data of the member is valid - description, rank, name, etc.
2. Ensure the member has 3 photos in his folder - picture1.jpg, ...
3. Change the featuredMember variable in the metadata.md

## New Podcast

When a new Podcast episode is added, it is important to change both the 
list of previous episodes, highlight the new one, and change the main image

1. First of all, change the main.png picture in the Podcasts folder.
2. Add the new links in the Metadata.md file of the new episodes
3. Change the latestPodcastEpisode variable in the Metadata.md file.


## New Event

When a new Event is announced, there are a few things one should keep in
mind.

1. Create the new event folder in Assets/Events. It should be in the form of
"[LastNumber+1]-[EventName]". The folder should include both the event.md
as well as a main.jpg. If the event is in the future, it is fine to use a
placeholder image found online
2. When adding a new Event.md, there are a few things one should keep in mind
   - Title: The name of the event @ the collaboration
   - Date: The date that the event has taken place on. Future events should
   have future dates. Duh
   - Location: The name of the location @ The address of the location
   - Description: The description of the event in about 5 sentences
   - Excerpt: Usually the first sentence of the description
   - MainImage: "main.jpg"
   - Link: For past events this will be a link to the Instagram post about it
   For future events, however, this link will lead to a calendar app where
   the user will be able to book the event entry.
3. Add the event slug in the Events list in Metadata.md

## Update Metadata Metadata

The metadata of the Metadata should also be updated with each new iteration

1. Update the Date
2. Increase the Version

## Test & Push

Ensure every change is in order by testing the application locally.
Afterwards, you are free to push the changes to master and finally, deploy
the application.

1. Make sure the commit message reflects the changes and current version
2. Done :)
