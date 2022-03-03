


// function changeTheme(){

//     let colours = ["red", "green", "blue", "black", "white"];

    // for(i=0; i<colours.length; i++){
    // //console.log(colours[i]);
    // document.body.style.backgroundColor=colours[0];

    // x = Math.floor((Math.random() *4));
    // document.body.style.backgroundColor=colours[x];


    // }


    function toggleDescription(){

        let briefCollapse = document.getElementById('briefDescription');
        let fullCollapse = document.getElementById('fullDescription');

        let bsCollapseBrief = new bootstrap.Collapse(briefCollapse);
        let bsCollapseFull = new bootstrap.Collapse(fullCollapse);


        bsCollapseBrief.toggle();
        bsCollapseFull.toggle();

    
    
    
    }