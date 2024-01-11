# kaso.whatsup
Google calendar experiment - displaying a calendar in view, that has been populated with randomly generated events. This calendar actually retains my actual free/available time ranges based on my actual events, and highlights the available time in view. Eventually, a viewer/user should be able to add an event to my calendar and view that; this event should be sent and added to my real google calendar as well.

#### API
 PUBLIC
 
/view - see calender (list of events) in a "calendar view"

/createEvent - click on an available time range, popup a module with a form to collect event details from user, and post new event to calendar. Upon successful post, view should rerender showing new event in calendar

PRIVATE

/readEvents - pull list of events for calendar, display in view

/postEvent - on submit of new event form, create new event with details in calendar


