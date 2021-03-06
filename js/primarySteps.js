// endpoint 
//https://devto-74b4e-default-rtdb.firebaseio.com/.json

let posts = {
    post1: {
        postId: 1,
        userId: 1,
        title: "Iconic developers | part 4 ð¤·ââï¸ðð¤",
        content: "When we think about Finances, what comes to our mind are the earnings and the spendings. We aim to maximize our earnings and minimize irrational spending. But, to effectively change our spending pattern, we need to track it first. With this Finance Tracking template, youâll not only be able to keep track of exactly where each penny has been spent but also how much percentage of total funds it makes up for",
        creationDate: "14/01/2010",
        reactions: 300,
        coverUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--ShEnuR1V--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lje8slw7lz8btjpx1pm0.png"
    },
    post2: {
        postId: 2,
        userId: 2,
        title: "Reflecting on my 1st month blogging; a retrospect ð­",
        content: "Oh boy, this one is frustrating! Let me tell you something: I don't lose sleep over this, but if anything, I'd love to hear from others how they feel about my blogs. I personally value comments more than likes. I like to engage in intellectual conversations and discussions whenever possible, but truth is, most people have an easier time dropping likes and moving on with their lives. Totally acceptable, though it leaves me wondering how they really feel about my post.",
        creationDate: "11/08/2020",
        reactions: 100,
        coverUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--4c0eplTv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gclqreati3py9u3ic7r5.jpg"
    }
};

let replies = {
    reply1: {
        userId: 1,
        postId: 1,
        content: "Excelente post!!!",
        creationDate: "11/08/2020"
    },
    reply2: {
        userId: 2,
        postId: 2,
        content: "Excelente post!!!",
        creationDate: "11/08/2020"
    }
}

let users = {
    user1: {
        userId: 1,
        userName: "Mariana Limon",
        photo: "https://media-exp1.licdn.com/dms/image/C4D03AQGSNcVVaq8lMw/profile-displayphoto-shrink_100_100/0/1517226943932?e=1624492800&v=beta&t=uzLCWSw4HqSxxxcCOtoIGAKNDTdptElyvzV9oiW6EFM"
    },
    user2: {
        userId: 2,
        userName: "Israel Salinas",
        photo: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_400_400/0/1550176229405?e=1624492800&v=beta&t=Qpn2WK0DUkdBFCBChATyL1rxtDKGm_dwPoLNLww37yA"
    }
}




if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
    $(title[i]).parents('.my-card-article').show(); 
}else{
    $(title[i]).parents('.my-card-article').hide(); 
}