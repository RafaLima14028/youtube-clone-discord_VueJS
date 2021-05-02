<template>
  <div class="channel-data">
    <div class="messages">
      <ChannelMessage author="Rafael Lima" date="02/05/2021" isBot hasMention>
        Esta é uma mensagem!
      </ChannelMessage>
      <ChannelMessage author="Rafael Lima" date="02/05/2021" isBot>
        Esta é uma mensagem!
      </ChannelMessage>
      <ChannelMessage
        v-for="messages in 20"
        :key="messages.id"
        author="Rafael Lima"
        date="02/05/2021"
      >
        Esta é uma mensagem!
      </ChannelMessage>
      <ChannelMessage author="Rafael Lima" date="02/05/2021" isBot>
        Esta é uma mensagem!
      </ChannelMessage>
      <ChannelMessage author="Rafael Lima" date="02/05/2021" isBot hasMention>
        Esta é uma mensagem!
      </ChannelMessage>
      <ChannelMessage author="Rafael Lima" date="02/05/2021" hasMention>
        <Mention>Daniela Alves</Mention>, olha isso!
      </ChannelMessage>
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="Conversar em #chat-livre" />
      <div class="icon">
        <AtIcon :size="24" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import AtIcon from "vue-material-design-icons/At";
import ChannelMessage from "./ChannelMessage";

export default {
  components: {
    AtIcon,
    ChannelMessage
  }
};

Vue.component("Mention", {
  template: '<span class="mention"><slot /><span>'
})
</script>

<style lang="scss" scoped>
.channel-data {
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--primary);
  flex: 1;
}

.messages {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 46px - 68px);
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;
  scrollbar-width: thin !important;

  .channel-message:first-child {
    margin-top: 0;
  }
}

.input-wrapper {
  width: 100%;
  padding: 0 16px;
  height: 68px;

  input {
    width: 100%;
    height: 47px;
    padding: 0 10px 0 57px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;

    &::placeholder {
      color: var(--grey);
    }
  }

  .icon {
    color: var(--grey);
    position: relative;
    top: -50%;
    left: 14px;
    transition: 0.2s;
    width: 24px;
  }
}
</style>
