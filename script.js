$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function (response) {
        // console.log(response);

        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            updateUserInformation(i, user);
        }
    }
})

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);

    $user.find('.user-name').text(user.name);
    // $user.find('.user-name').text(User['name']);

    $user.find('.user-phone').text(user.phone);

    $user.find('.user-company').text(user.company.name);

    $user.find('.user-website').find('a').text(user.website);

    $user
        .find('.user-website')
        .find('a')
        .attr('href', "https://" + user.website);

    // $user
    //     .find('.user-website')
    //     .find('a')
    //         .text(user.website)
    //         .attr('href', "https://" + user.website);
}