var name = "Aiden Pearce";
var role = "Security Consultant, Web Designer";
var skills = ["C++", "JAVA", "HTML", "CSS", "Linux", "Cloud Computer", "Hacker", "Martial arts"];
var bio = {
    "name": "Aiden Pearce",
    "role": role,
    "birthday": "1974/05/02",
    "contacts": {
        "email": "watchdog@gmail.com",
        "phone": "403XXXXXXX",
        "github": "peweeew",
        "twitter": "@watchdog",
        "location": "Toronto"
    },
    "skills": skills,
    "biopic": "images/aiden.gif",
    "blog": "http://blog/watchdog.com",
    "welcomeMessage" : "I don't look back anymore. I don't regret. I look forward. Everything is connected, and I'll use that to expose, to protect, and if necessary… to punish.",
    "display": function(){},
    "footerDisplay": function(){}
};

var edu = {
    "schools": [{
        "name": "SAIT Technique College",
        "location": "Calgary",
        "dates": 2004,
        "degree": "Dollege Diploma",
        "majors": ["Computer Science"],
        "url" : "www.sait.com"
    }, {
        "name": "Bay College",
        "location": "Vancouver",
        "dates": 2008,
        "degree": "BA",
        "majors": ["Computer Science"],
        "url" : "www.baycollege.com"
    }],
    "online course": [{
        "title": "Introduction of programming",
        "school": "udacity",
        "date": 2008,
        "url": "www.udacity.com"
    }],
    "display": function(){},
};

var work = {
    "jobs": [{
        "employer": "Chinook",
        "title": "Web developer",
        "dates": "2005-2008",
        "location": "Calgary,AB,CANADA",
        "description": "Maintain websites of Chinook mall"
    }, {
        "employer": "Tim Horton",
        "title": "Casher",
        "dates": "2008-2010",
        "location": "Vancouver,BC,CANADA",
        "description": "Work as a casher in Tim Horton"
    }, {
        "employer": "ctOS",
        "title": "Network Administrator",
        "dates": "2010-2015",
        "location": "Waterloo,ON,CANADA",
        "description": "Nework Administrator in ctOS company"
    }, {
        "employer": "UbiSoft",
        "title": "Game De",
        "dates": "2010-2015",
        "location": "Montrol,ON,CANADA",
        "description": "Game Designer"
    }, ],
    "display": function(){}
};

var projects = {
    projects: [{
        "title": "Custom service web design",
        "dates": "2007",
        "description": "bulid custom service web site.",
        "images": []
    }, {
        "title": "Chinook store iOS app",
        "dates": "2009",
        "description": "Bulid Chinook mall shopping app in iOS 6 and 7.",
        "images": []
    }, {
        "title": "Customer shopping web design",
        "dates": "2012",
        "description": "Update the old custom shopping web site to HTML5.",
        "images": []
    }, {
        "title": "Watch Dog",
        "dates": "2014",
        "description": "Write my story into novel named watch dog, and sell to UbiSoft.",
        "images": []
    }],
    "display" : function(){},
};



$("#mapDiv").append(googleMap);

bio.display = function() 
{

    //ADD PERSONAL INFORMATION 
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMsg);

    $("#topContacts:last").prepend(formattedMobile);
    $("#topContacts:last").prepend(formattedEmail);
    $("#topContacts:last").prepend(formattedTwitter);
    $("#topContacts:last").prepend(formattedGithub);
    $("#topContacts:last").prepend(formattedBlog);
    $("#topContacts:last").prepend(formattedLocation);

    //ADD SKILLS
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            formattedSkill = HTMLskills.replace("%data%", skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};


bio.footerDisplay = function() 
{
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
 
    $("#footerContacts").prepend(formattedMobile);
    $("#footerContacts").prepend(formattedEmail);
    $("#footerContacts").prepend(formattedTwitter);
    $("#footerContacts").prepend(formattedGithub);     
};


work.display = function()
{

    //ADD WORKING EXPERIENCE
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle)
            .append(formattedDates)
            .append(formattedLocation)
            .append(formattedDescription);
    }
};


edu.display = function()
{ 

    //ADD EDUCATION 

    for (var i_edu in edu.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", edu.schools[i_edu].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", edu.schools[i_edu].degree);
        var formattedSchool = formattedName + formattedDegree;
        var formattedDates = HTMLschoolDates.replace("%data%", edu.schools[i_edu].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", edu.schools[i_edu].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", edu.schools[i_edu].major);
        $(".education-entry:last").append(formattedSchool)
            .append(formattedDates)
            .append(formattedLocation)
            .append(formattedMajor);
    }
};

projects.display = function()
{
    //ADD PORJECT INFORMATION
    for (var i_project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i_project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i_project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i_project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i_project].images.length > 0) {
            for (var i_image in projects.projects[i_project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i_project].images[i_image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

bio.display();
bio.footerDisplay();
work.display();
edu.display();
projects.display();