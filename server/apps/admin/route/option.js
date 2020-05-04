module.exports = app => {
  const Channel = require("./../../../libs/db/models/Channel");
  const User = require("./../../../libs/db/models/User");
  const Article = require("./../../../libs/db/models/Article");
  const Comment = require("./../../../libs/db/models/Comment");
  const Reply = require("./../../../libs/db/models/Reply");

  app.use("/admin/api/options/:resource", async (req, res, next) => {
    const { resource = "users" } = req.params;
    let option = null;
    switch (resource) {
      case "users":
        option = {
          title: "用户列表",
          column: [
            { label: "用户名", prop: "username" },
            { label: "密码", prop: "password", type: "password" },
            { label: "联系电话", prop: "phone" },
            { label: "联系地址", prop: "address" },
          ],
        };
        break;

      case "categories":
        const categories = (await Channel.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "分类列表",
          column: [
            {
              prop: "parentCategory",
              label: "上级分类",
              type: "select",
              dicData: categories,
              row: true,
            },
            { prop: "id", label: "ID", row: true },
            { prop: "name", label: "分类", row: true },
            { prop: "description", label: "分类描述", row: true },
          ],
        };
        break;

      case "tags":
        option = {
          title: "标签列表",
          column: [
            { prop: "name", label: "标签", row: true },
            { prop: "path", label: "路径", row: true },
          ],
        };
        break;

      case "articles":
        const authors = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "文章列表",
          column: [
            {
              prop: "author",
              label: "作者",
              type: "select",
              dicData: authors,
              row: true,
              required: true,
            },
            { prop: "title", label: "文章标题", type: "input", row: true },
            {
              label: "封面",
              prop: "covers",
              dataType: "array",
              type: "upload",
              propsHttp: {},
              span: 24,
              listType: "picture-card",
              action: "/upload",
            },
            {
              prop: "content",
              label: "文章内容",
              formslot: true,
              row: true,
              span: 24,
            },
          ],
        };
        break;

      case "comments":
        const articles = (await Article.find()).map(item => ({
          label: item.title,
          value: item._id,
        }));

        const users = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "评论列表",
          column: [
            {
              prop: "article",
              label: "所属文章",
              type: "select",
              dicData: articles,
              filterable: true,
              row: true,
            },
            {
              prop: "user",
              label: "用户",
              type: "select",
              dicData: users,
              filterable: true,
              row: true,
            },
            {
              prop: "content",
              label: "评论内容",
              type: "textarea",
              row: true,
              span: 24,
            },
          ],
        };
        break;

      case "replies":
        const comments = (await Comment.find()).map(item => ({
          label: item.content,
          value: item._id,
        }));
        const replyUsers = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "回复列表",
          column: [
            {
              prop: "comment",
              label: "回复评论",
              type: "select",
              dicData: comments,
              filterable: true,
              row: true,
            },
            {
              prop: "fromUser",
              label: "用户",
              type: "select",
              dicData: replyUsers,
              filterable: true,
              row: true,
            },
            {
              prop: "toUser",
              label: "被回复用户",
              type: "select",
              dicData: replyUsers,
              filterable: true,
              row: true,
            },
            {
              prop: "content",
              label: "回复内容",
              type: "textarea",
              row: true,
              span: 24,
            },
          ],
        };
        break;

      case "actions":
        const actionUsers = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));
        const actionComments = (await Comment.find()).map(item => ({
          label: item.content,
          value: item._id,
        }));
        const actionReplies = (await Reply.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "操作列表",
          column: [
            {
              prop: "user",
              label: "操作用户",
              type: "select",
              dicData: actionUsers,
              filterable: true,
              row: true,
            },
            {
              prop: "type",
              label: "目标类型",
              type: "select",
              cascaderItem: ["object"],
              dicData: [
                { label: "Article", value: "Article" },
                { label: "Comment", value: "Comment" },
                { label: "Reply", value: "Reply" },
                { label: "User", value: "User" },
              ],
              row: true,
            },
            {
              prop: "object",
              label: "具体目标",
              type: "select",
              rules: [
                {
                  required: true,
                  message: "请选择具体操作目标",
                  trigger: "blur",
                },
              ],
              dicData: [],
              filterable: true,
              row: true,
            },
            {
              prop: "name",
              label: "操作名称",
              type: "input",
              type: "select",
              dicData: [
                { label: "like", value: "like" },
                { label: "comment", value: "comment" },
                { label: "reply", value: "reply" },
              ],
              row: true,
            },
          ],
        };
        break;

      default:
        option = {};
        break;
    }

    res.send({
      option,
    });
  });
};
