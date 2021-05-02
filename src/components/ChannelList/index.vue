<template>
  <div class="channel-list">
    <div class="category">
      <div>
        Canais de Texto
      </div>
      <div class="category-icon">
        <AddCategoryIcon :size="21" />
      </div>
    </div>
    <ChannelButton Selected channelName="chat-livre" />
    <ChannelButton channelName="vue-js" />
    <ChannelButton channelName="jogos" />
    <ChannelButton channelName="javascript" />
    <ChannelButton channelName="react-js" />
  </div>
</template>

<script>
import ChannelButton from "./ChannelButton";
import AddCategoryIcon from "vue-material-design-icons/Plus";

export default { components: { ChannelButton, AddCategoryIcon } };
</script>

<style lang="scss" scoped>
.channel-list {
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 0 16px;
  background-color: var(--secondary);
}

.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  color: var(--grey);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;

  .category-icon {
    color: var(--symbol);
    cursor: pointer;
  }
}
</style>
