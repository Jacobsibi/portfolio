// Entire schema is one object
export default {
    //properties
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [   //array of fields
        {   //object
            name: 'name', //name of person leaving testimonial
            title: 'Name',
            type: 'string'
        },
        {   
            name: 'company', 
            title: 'Company',
            type: 'string'
        },
        {   
            name: 'imageurl', 
            title: 'ImgURL',
            type: 'image',
            //must use options with image
            options: { //object
                hotspot: true, //user can use crop when uploading image
            }
        },
        {   
            name: 'feedback', 
            title: 'Feedback',
            type: 'string'
        },
    ],
}