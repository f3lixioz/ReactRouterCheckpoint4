import {React, useState, useEffect} from 'react';

function ContactProfiles(){
    const [contacts, setContacts] = useState([
        {
            firstName: "Slimothy",
            lastName: "Chef",
            birthday: "11/01/1960 00:00:00",
            profileImage: "/url-to-an-image.jpeg"
        },
        {
            firstName: "Marcus",
            lastName: "Zuckenhagan",
            birthday: "05/14/1985 00:00:00",
            profileImage: "/url-to-an-image.jpeg"
        },
        {
            firstName: "Billyam",
            lastName: "Watergate",
            birthday: "06/17/1974 00:00:00",
            profileImage: "/url-to-an-image.jpeg"
        }        
    ])
}

export default ContactProfiles