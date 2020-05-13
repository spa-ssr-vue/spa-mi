module.exports = app => {
  const Category = require("./../../../libs/db/models/Category");
  const Product = require("./../../../libs/db/models/Product");
  const User = require("./../../../libs/db/models/User");
  const Attr = require("./../../../libs/db/models/Attr");
  const AttrValue = require("./../../../libs/db/models/AttrValue");

  app.use("/admin/api/options/:resource", async (req, res, next) => {
    const { resource } = req.params;
    let option = null;

    switch (resource) {
      case "users":
        option = {
          title: "用户列表",
          column: [
            {
              label: "头像",
              prop: "avatar",
              type: "upload",
              listType: "picture-img",
              action: "/upload",
              row: true,
            },
            { label: "用户名", prop: "username", span: 12 },
            {
              label: "密码",
              prop: "password",
              type: "password",
              hide: true,
              span: 12,
            },
            { label: "联系电话", prop: "phone", span: 12 },
            { label: "电子邮箱", prop: "email", span: 12 },
          ],
        };
        break;

      case "categories":
        const cats = (await Category.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "分类列表",
          column: [
            {
              label: "上级分类",
              prop: "pid",
              type: "select",
              dicData: cats,
              row: true,
            },
            { label: "分类编码", prop: "code", row: true, type: "number" },
            { label: "分类名称", prop: "name", row: true },
            { label: "分类描述", prop: "desc", row: true },
          ],
        };
        break;

      case "brands":
        option = {
          title: "品牌列表",
          column: [
            {
              label: "品牌编码",
              prop: "code",
            },
            {
              label: "品牌名称",
              prop: "name",
            },
          ],
        };

        break;

      case "products":
        const productCats = (await Category.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "产品列表",
          column: [
            {
              label: "产品封面",
              prop: "coverImg",
              type: "upload",
              listType: "picture-img",
              action: "/uploads",
              row: true,
            },
            { label: "产品编码", prop: "id", type: "number", span: 12 },
            {
              label: "产品分类",
              prop: "categories",
              type: "select",
              multiple: true,
              dicData: productCats,
              span: 12,
            },

            { label: "产品名称", prop: "name", span: 12 },
            { label: "产品标题", prop: "title", span: 12 },
            { label: "产品库存", prop: "stock", type: "number", span: 12 },
            {
              label: "产品价格",
              prop: "price",
              type: "number",
              span: 12,
              precision: 2,
            },
            {
              label: "产品状态",
              prop: "status",
              type: "select",
              dicData: [
                { label: "上架", value: 1 },
                { label: "下架", value: 0 },
              ],
            },
          ],
        };
        break;

      case "product_specs":
        const specProducts = (await Product.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        const specAttrValues = (await AttrValue.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "规格列表",
          column: [
            {
              label: "编码",
              prop: "code",
              row: true,
            },
            {
              label: "所属产品",
              prop: "product",
              type: "select",
              dicData: specProducts,
              row: true,
            },
            {
              label: "规格项",
              prop: "specs",
              type: "select",
              multiple: true,
              dicData: specAttrValues,
              row: true,
            },
            {
              label: "价格",
              prop: "price",
              type: "number",
              row: true,
            },
            {
              label: "库存",
              prop: "stock",
              type: "number",
              row: true,
            },
          ],
        };
        break;

      case "attrs":
        const attrCats = (await Category.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "属性key列表",
          column: [
            {
              label: "属性key分类",
              prop: "categories",
              type: "select",
              dicData: attrCats,
              row: true,
            },
            {
              label: "属性key编码",
              prop: "code",
              row: true,
            },
            {
              label: "属性key名称",
              prop: "name",
              row: true,
            },
          ],
        };

        break;

      case "attr_values":
        const attrs = (await Attr.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "属性value列表",
          column: [
            {
              label: "所属属性key",
              prop: "attr",
              type: "select",
              dicData: attrs,
              row: true,
            },
            {
              label: "属性value编码",
              prop: "code",
              row: true,
            },
            {
              label: "属性value名称",
              prop: "name",
              row: true,
            },
          ],
        };

        break;

      case "banners":
        const bannerCats = (await Category.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));
        const bannerProducts = (await Product.find()).map(item => ({
          label: item.name,
          value: item._id,
        }));

        option = {
          title: "广告列表",
          column: [
            {
              label: "编码",
              prop: "code",
            },
            {
              label: "所属分类",
              prop: "category",
              type: "select",
              dicData: bannerCats,
            },
            {
              label: "所属产品",
              prop: "product",
              type: "select",
              dicData: bannerProducts,
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

      case "addresses":
        const addrUsers = (await User.find()).map(item => ({
          label: item.username,
          value: item._id,
        }));

        option = {
          title: "地址列表",
          column: [
            {
              prop: "user",
              label: "所属用户",
              type: "select",
              dicData: addrUsers,
              filterable: true,
              row: true,
            },
            {
              prop: "name",
              label: "收货人姓名",
              filterable: true,
              row: true,
            },
            {
              prop: "phone",
              label: "收货人电话",
              filterable: true,
              row: true,
            },
            {
              prop: "addr",
              label: "详细地址",
              type: "textarea",
              filterable: true,
              row: true,
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
