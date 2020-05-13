module.exports = app => {
  const Category = require("./../../../libs/db/models/Category");
  const Product = require("./../../../libs/db/models/Product");
  const Banner = require("./../../../libs/db/models/Banner");
  // const User = require("./../../../libs/db/models/User");

  app.use("/web/api/init/:flag", async (req, res, next) => {
    const flag = req.params.flag;
    switch (flag) {
      case "product":
        let products = [
          {
            name: 'Redmi 智能电视 MAX 98"',
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米电视5 55英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米电视5 65英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米电视5 75英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米电视5 Pro 55英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米电视5 Pro 65英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米电视5 Pro 75英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "Redmi 红米电视 70英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c6f98e59f3e78eb5d959bbcff081562.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "全面屏电视Pro 65英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18c9d79b3d6c6635c55ba1bb371182af.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "全面屏电视Pro 55英寸",
            thumbImg:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a3aff2c5e8207dafd8fc3bfad5a2e21.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          },
          {
            name: "小米壁画电视 65英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg?thumb=1&w=40&h=40",
          },
          {
            name: "小米全面屏电视",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 32英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/820cba6c44f7263c5fe773a7ffaf85b9.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 43英寸青春版",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ea8be80c82c273e167d5b282b17e9b2b.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 49英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9710af2fff5548ea05950473898ef0e.jpg?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 50英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2f15dd9779865b48bfa8c8e915ac75ac.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 55英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37ce1615e1e8fcbbda2b3f37c09ec676.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 58英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11e4d06f29877044ddce0f9fdd2e26d5.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4A 65英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ca8058c9c776447265b99420ff04e544.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4C 32英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cb83515483547404cd26a962bada5d5b.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4C 40英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/af572c503ed2a81ab71e2810617860c5.jpg?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4C 43英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bef124bc015669bdacf76d5d4b02a7e.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4C 50英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/24ee18218b3b98161e17abe23c6fd539.png?thumb=1&w=40&h=40",
          },
          {
            name: "小米电视4C 55英寸",
            thumbImg:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe603cc3b9c19903be14aac4e9b571d6.jpg?thumb=1&w=40&h=40",
          },
        ];

        const cat = await Category.findOne({ id: 200000 });

        let items = products.map((item, index) => {
          item.category = cat._id;
          item.stock = 100;
          item.status = 1;
          return item;
        });

        await Product.insertMany(items);

        res.send(await Product.find());
        // res.send(items);
        break;

      case "banner":
        const i = "5eb381e269528a37b099f948";
        const p = await Product.findById(i);

        const items1 = [
          {
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422854.51919656.jpg",
          },
          {
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422856.4297012.jpg",
          },
          {
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422857.99914258.jpg",
          },
          {
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422859.50816967.jpg",
          },
          {
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1567422861.32732818.jpg",
          },
        ].map(item => {
          item.product = p._id;
          return item;
        });

        const obj = {
          product: p._id,
          items: items1,
        };

        const data = await Banner.create(obj);

        res.send(data);
        break;

      default:
        break;
    }
  });
};
