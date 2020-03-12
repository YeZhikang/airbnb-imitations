<template>
    <div>
        <rooms-header/>
        <rooms-intro/>
        <rooms-comments/>
        <rooms-location/>
        <rooms-owner/>
        <cancle-policy/>
    </div>
</template>

<script>
    import RoomsHeader from "../components/Rooms/RoomsHeader";
    import RoomsIntro from '../components/Rooms/RoomsIntro';
    import RoomsComments from '../components/Rooms/RoomsComments';
    import RoomsLocation from '../components/Rooms/RoomsLocation';
    import RoomsOwner from '../components/Rooms/RoomsOwner';
    import CanclePolicy from '../components/Rooms/CanclePolicy';
    import '../static/css/rooms.css'
    export default {
        name: "TheRooms",
        components: {RoomsHeader,RoomsIntro,RoomsComments,RoomsLocation,RoomsOwner,CanclePolicy},

    }
</script>

<style scoped>

</style>
