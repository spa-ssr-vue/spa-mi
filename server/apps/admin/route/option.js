module.exports = app => {
  const Category = require("./../../../libs/db/models/Category");
  const User = require("./../../../libs/db/models/User");
  const Comment = require("./../../../libs/db/models/Comment");
  const Reply = require("./../../../libs/db/models/Reply");

  app.use("/admin/api/options/:resource", async (req, res, next) => {
    const { resource = "users" } = req.params;
    let option = null;
    let categories = (await Category.find()).map(item => ({
      label: item.name,
      value: item._id,
    }));

    switch (resource) {
      case "users":
        option = {
          title: "用户列表",
          column: [
            {
              label: "头像",
              prop: "avatar",
              row: true,
              type: "upload",
              listType: "picture-img",
              action: "/upload",
            },
            { label: "用户名", prop: "username", row: true },
            { label: "密码", prop: "password", type: "password", span: 12 },
            {
              label: "确认密码",
              prop: "password2",
              type: "password",
              span: 12,
            },
            { label: "联系电话", prop: "phone", span: 12 },
            { label: "联系地址", prop: "address", span: 12 },
          ],
        };
        break;

      case "categories":
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
            { prop: "id", label: "ID", row: true, type: "number" },
            { prop: "name", label: "分类名称", row: true },
            { prop: "description", label: "分类描述", row: true },
          ],
        };
        break;

      case "products":
        option = {
          title: "产品列表",
          column: [
            {
              prop: "cover",
              label: "产品封面",
              type: "upload",
              listType: "picture-img",
              action: "/uploads",
              row: true,
            },
            { prop: "id", label: "ID", type: "number", span: 12 },
            {
              prop: "category",
              label: "产品分类",
              type: "select",
              dicData: categories,
              span: 12,
            },

            { prop: "name", label: "产品名称", span: 12 },
            { prop: "title", label: "产品标题", span: 12 },
            { prop: "stock", label: "产品库存", type: "number", span: 12 },
            {
              prop: "price",
              label: "产品价格",
              type: "number",
              span: 12,
              precision: 2,
            },
            {
              prop: "status",
              label: "产品状态",
              type: "select",
              dicData: [
                { label: "上架", value: 1 },
                { label: "下架", value: 0 },
              ],
            },
          ],
        };
        break;

      case "carts":
        const cartUser = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "购物车列表",
          column: [
            {
              prop: "user",
              label: "属于用户",
              type: "select",
              dicData: cartUser,
              row: true,
            },
            {
              label: "总数",
              prop: "totalCount",
              type: "number",
            },
            {
              label: "总价",
              prop: "totalPrice",
              type: "number",
              precision: 2,
            },
          ],
        };
        break;

      case "orders":
        const orderUsers = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "订单列表",
          column: [
            {
              prop: "user",
              label: "属于用户",
              type: "select",
              dicData: orderUsers,
            },
            {
              label: "订单状态",
              prop: "status",
              type: "select",
              dicData: [
                { label: "未处理", value: 0 },
                { label: "已完成", value: 1 },
                { label: "已取消", value: 2 },
              ],
            },
            {
              label: "支付类型",
              prop: "paymentType",
              type: "select",
              dicData: [
                { label: "微信支付", value: 0 },
                { label: "支付宝支付", value: 1 },
                { label: "银行卡支付", value: 2 },
                { label: "其他", value: 10 },
              ],
            },
            {
              label: "支付金额",
              prop: "payment",
              type: "number",
              precision: 2,
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
