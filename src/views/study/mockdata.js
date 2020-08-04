const comment = {
    status: "成功",
    code: 200,
    data: [
      {
        id: 'comment0001', //主键id
        date: '2018-07-05 08:30',  //评论时间
        ownerId: 'talents100020', //文章的id
        fromId: 'errhefe232213',  //评论者id
        fromName: '犀利的评论家',   //评论者昵称
        fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
        likeNum: 3, //点赞人数
        content: '非常靠谱的程序员',  //评论内容
      },
      {
        id: 'comment0002',
        date: '2018-07-05 08:30',
        ownerId: 'talents100020',
        fromId: 'errhefe232213',
        fromName: '毒蛇郭德纲',
        fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
        likeNum: 0,
        content: '从没见过这么优秀的人',
        reply: []
      },
      {
        id: 'comment0002',
        date: '2018-07-05 08:30',
        ownerId: 'talents100020',
        fromId: 'errhefe232213',
        fromName: '毒蛇郭德纲',
        fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
        likeNum: 0,
        content: '从没见过这么优秀的人',
        reply: []
      }
    ]
  };
  
  export {comment}