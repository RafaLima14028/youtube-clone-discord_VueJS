<template>
  <div id="grid">
    <ServerList />
    <ServerName />
    <ChannelList />
    <UserInfo />
    <ChannelInfo />
    <ChannelData />
  </div>
</template>

<script>
import ServerList from "./ServerList/index";
import ServerName from "./ServerName/index";
import ChannelList from "./ChannelList/index";
import UserInfo from "./UserInfo/index";
import ChannelInfo from "./ChannelInfo/index";
import ChannelData from "./ChannelData/index";

export default {
  components: {
    ServerList,
    ServerName,
    ChannelList,
    UserInfo,
    ChannelInfo,
    ChannelData
  }
};
</script>

<style scoped>
#grid {
  overflow: hidden;
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    "SL SN CI CI"
    "SL CL CD UL"
    "SL UI CD UL";
  height: 100vh;
}
</style>
