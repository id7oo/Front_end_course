var bio = {
    name: "Abdulrahman Aldahlawi",
    role: "SAP Developer",
    contacts: {
        mobile: "0590205050",
        email: "ded7477@gmail.com",
        github: "id7oo",
        twitter: "@ide7oo",
        location: "Riyadh"
    },
    welcomeMessage: "Hello ,This is my resume!",
    skills: ["UI/UX", "Web Design", "HTML", "CSS", "Javascript", "Graphic Design"],
    biopic: "images/mypic.jpg"
};

bio.display = function() {
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        photo = HTMLbioPic.replace("%data%", bio.biopic),
        github = HTMLgithub.replace("%data%", bio.contacts.github),
        email = HTMLemail.replace("%data%", bio.contacts.email),
        location = HTMLlocation.replace("%data%", bio.contacts.location),
        twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(photo);
    $("#topContacts").prepend(location);
    $("#topContacts").prepend(twitter);
    $("#topContacts").prepend(github);
    $("#topContacts").prepend(email);
    $("#footerContacts").prepend(email);
    $("#topContacts").prepend(mobile);
    $("#footerContacts").prepend(mobile);
    $("#footerContacts").prepend(twitter);
    $("#footerContacts").prepend(github);
    $('.welcome-message').text(bio.welcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var x = 0; x < bio.skills.length; x++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[x]));
        }
    }
};
bio.display();


var work = {
    "jobs": [{
        employer: "Wipro LTD.",
        title: "Developer L1",
        location: "Riyadh",
        dates: "2014",
        description: "I'm a SAP ABAP Developer working on Wipro LTD. at KSAPSARC Project"
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDate);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
    }
};
work.display();


var projects = {
    "projects": [{
        title: 'Front End Development',
        dates: "2017",
        description: 'Front End Development @ Udacity',
        images: ["images/udacity.png", "images/udacity.png"]
    }, ]
};


projects.display = function() {
    for (var proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[proj].images.length > 0) {
            for (var image = 0; image < projects.projects[proj].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
};
projects.display();



var education = {
    "schools": [{
        name: "Qassim University",
        location: "Qassim",
        degree: "Bachelor Degree",
        majors: ["Information Technolgy"],
        dates: "2014",
        url: "https://www.qu.edu.sa"
    }, ],
    "onlineCourses": [{
        title: "UI/UX",
        school: "Edx",
        dates: "2016",
        url: "https://www.edx.org/"
    }, {
        title: "Front End Development",
        school: "Udacity",
        dates: "2017",
        url: "www.udacity.com"
    }, ]
};

education.display = function() {
    for (var edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);
        var schoolname = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry").append(schoolname);
        var location = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry").append(location);
        var degrees = HTMLschoolDegree.replace("%data%", education.schools[edu].degrees);
        $(".education-entry").append(degrees);
        var majors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry").append(majors);
        var dates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry").prepend(dates);
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (var onlineC = 0; onlineC < education.onlineCourses.length; onlineC++) {
        var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineC].title);
        $(".education-entry:last").append(title);
        $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineC].school));
        $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[onlineC].dates));
        $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineC].url));
    }
};
education.display();

$('#mapDiv').append(googleMap);
