I. 
Lab 5 
Create a simple demonstration of a tabnapping attack using HTML and JavaScript for educational 
purposes. 
Scenario A 
a. You are on Page A. 
b. Page A contains a link to Page B using target="_blank" rel="opener ". 
c. When the user clicks the link: 
i. 
Page B opens in a new tab. 
ii. 
Page A (original tab) is automatically redirected to Page C. 
Scenario B 
a. You are on Page A. 
b. Page A contains a link to Page B using target="_blank". 
c. When the user clicks the link: 
i. 
Page B opens in a new tab. 
ii. 
After a few seconds, Page B redirects to Page C. 
Learning Objectives 
a. Understand how window.opener works. 
b. Understand how tabnapping attacks occur. 
c. Identify the security risk of using target="_blank" without protection. 
d. Apply prevention using rel="noopener noreferrer". 
��
� This exercise is for cybersecurity education only. 
II. 
Dynamic Administrative Division Selector 
1. Objective 
To practice handling asynchronous API calls, managing DOM manipulation, and implementing 
cascading logic using JavaScript, Tailwind CSS, and DaisyUI. 
2. Scenario 
You are tasked with building a user profile address form. To ensure data consistency, users must 
select their location from a predefined list of Cambodian administrative divisions (Province → 
District → Commune → Village). You will use the Cambo Gazetteer API to fetch live data. 
3.  Technical Requirements 
Frontend Framework: Tailwind CSS with DaisyUI components. 
Data Source: https://cambo-gazetteer.manethpak.dev/api/v1 
This data source will let you hit the classic CORS (Cross-Origin Resource Sharing) wall. This 
happens because the browser blocks scripts on 127.0.0.1 (your local machine) from calling an API 
on a different domain (manethpak.dev) unless that server explicitly gives permission via a header. 
Since you don't control the manethpak.dev server, you can't add that header yourself. 
To handle CORS (Cross-Origin Resource Sharing), for testing locally, you can route your requests 
through a proxy that adds the necessary headers for you. Change the API_BASE in your script to 
use cors-anywhere: 
Change your data source to :  
const API_BASE = https://corsproxy.io/?https://cambo-gazetteer.manethpak.dev/api/v1 
To get : 
• province: /provinces 
• district: /districts?province= id_of_selected _province 
• commune: /communes?district= id_of_selected_districts 
• village: /villages?commune= id_of_selected_commune 
Testing API: https://client.scalar.com/workspace/default/request/o5O93-MkLQ74GD5qCHHZm 
Key Logic: 
1. Initialize the page by fetching all Provinces. 
2. Implement "Cascading Selects": Lower-level dropdowns must remain disabled until their 
parent level is selected. 
3. Handle CORS (Cross-Origin Resource Sharing) issues using a proxy for local development. 
4. Ensure the UI resets correctly if a user changes a selection at a higher level (e.g., changing 
the Province should clear the Village). 
Code:  
Example interface:  
1. To call API: https://www.geeksforgeeks.org/javascript/javascript-fetch-method/ 
2. https://www.w3schools.com/jsref/event_onchange.asp or 
https://www.w3schools.com/js/js_htmldom_eventlistener.asp 
3. Dom Manipulation: https://usefulangle.com/post/83/html-select-common-operations
with-javascript 