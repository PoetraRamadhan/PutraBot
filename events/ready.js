module.exports = (client) => {
    console.log(`[LOGGED] => Log in as ${client.user.tag}`);
    function activityChanger() {
        const activity = ['type &help for command', 'Putra Indonesia', 'Don\'t forget to take care of yourself'];
        const randomAcitivty = Math.floor(Math.random() * activity.length);
        client.user.setActivity(activity[randomAcitivty], {type: 'PLAYING'});
    };setInterval(activityChanger, 15000);
}