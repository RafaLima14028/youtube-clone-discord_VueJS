<template>
  <div class="container">
    <div class="profile">
      <div class="avatar"></div>
      <div class="userdata">
        <strong>Rafael Lima</strong>
        <span>#7382</span>
      </div>
    </div>
    <div class="actions">
      <MicIcon :size="20" />
      <HeadPhonesIcon :size="20" />
      <SettingsIcon :size="20" />
    </div>
  </div>
</template>

<script>
import MicIcon from "vue-material-design-icons/Microphone";
import HeadPhonesIcon from "vue-material-design-icons/Headphones";
import SettingsIcon from "vue-material-design-icons/CogOutline";

export default {
  components: {
    MicIcon,
    HeadPhonesIcon,
    SettingsIcon
  }
};
</script>

<style lang="scss" scoped>
.container {
  grid-area: UI;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
}

.profile {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--grey);
}

.userdata {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  font-size: 13px;

  strong {
    display: block;
    color: var(--white);
  }

  span {
    color: var(--grey);
  }
}
</style>
