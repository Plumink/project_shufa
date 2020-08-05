<!--评论模块-->
<template>
  <div class="container">
    <div class="comment" v-for="(item,index) in comments" :key="index">
      <div class="info_a">
        <img class="avatar" :src="item.fromAvatar" width="36" height="36" />
        <div class="right">
          <div class="name">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <div class="content">{{item.content}}</div>
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <span class="Calligraphy_icon_good"></span>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      inputComment: "",
      showItemId: "",
    };
  },
  computed: {},
  methods: {
    /**
     * 点赞
     */
    likeClick(item) {
      if (item.isLike === null) {
        Vue.$set(item, "isLike", true);
        item.likeNum++;
      } else {
        if (item.isLike) {
          item.likeNum--;
        } else {
          item.likeNum++;
        }
        item.isLike = !item.isLike;
      }
    },

    created() {
      console.log(this.comments);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/scss/index";
.container {
  padding: 0 10px;
  box-sizing: border-box;
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid $border-fourth;
    .info_a {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .name {
          font-size: 16px;
          color: $text-main;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .date {
          font-size: 12px;
          color: $text-minor;
        }
      }
    }
    .content {
      font-size: 16px;
      color: $text-main;
      line-height: 20px;
      padding: 10px 0;
    }
    .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $text-minor;
      .like {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        &.active,
        &:hover {
          color: $color-main;
        }
        .iconfont {
          font-size: 14px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>