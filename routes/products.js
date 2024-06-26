const express = require("express");

const router = express.Router();

const productData = [
  {
    id: 1,
    name: "Áo thun nam",
    description: "Áo thun nam cotton 100%",
    price: 150000,
    quantity: 50,
    category: "Áo thun",
    image: "https://picsum.photos/200/200",
    raitings: 3,
  },
  {
    id: 2,
    name: "Quần jean nữ",
    description: "Quần jean nữ dáng ôm",
    price: 250000,
    quantity: 30,
    category: "Quần jean",
    image: "https://picsum.photos/200/200",
    raitings: 4,
  },
  {
    id: 3,
    name: "Balo học sinh",
    description: "Balo học sinh phong cách trẻ trung",
    price: 200000,
    quantity: 20,
    category: "Balo",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 4,
    name: "Váy dài hoa",
    description: "Váy dài hoa xinh xắn cho phái đẹp",
    price: 350000,
    quantity: 25,
    category: "Váy",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 5,
    name: "Giày thể thao nam",
    description: "Giày thể thao nam chính hãng",
    price: 450000,
    quantity: 40,
    category: "Giày",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 6,
    name: "Túi xách nữ",
    description: "Túi xách nữ dáng dài tiện lợi",
    price: 300000,
    quantity: 35,
    category: "Túi xách",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 7,
    name: "Áo khoác nam",
    description: "Áo khoác nam dáng dài, chất liệu chống nước",
    price: 600000,
    quantity: 20,
    category: "Áo khoác",
    image: "https://picsum.photos/200/200",
    raitings: 4,
  },
  {
    id: 8,
    name: "Đồng hồ nữ",
    description: "Đồng hồ nữ cao cấp, dây da thời trang",
    price: 800000,
    quantity: 15,
    category: "Đồng hồ",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 9,
    name: "Bộ đồ đi biển nam",
    description: "Bộ đồ đi biển nam chất liệu thoáng mát",
    price: 280000,
    quantity: 30,
    category: "Bộ đồ đi biển",
    image: "https://picsum.photos/200/200",
    raitings: 3,
  },
  {
    id: 10,
    name: "Quần short nữ",
    description: "Quần short nữ phong cách thể thao",
    price: 180000,
    quantity: 45,
    category: "Quần short",
    image: "https://picsum.photos/200/200",
    raitings: 5,
    raitings: 4.5,
  },
  {
    id: 11,
    name: "Áo sơ mi nữ",
    description: "Áo sơ mi nữ công sở thanh lịch",
    price: 200000,
    quantity: 50,
    category: "Áo",
    image: "https://picsum.photos/200/200",
    raitings: 4,
  },
  {
    id: 12,
    name: "Kính mát nam",
    description: "Kính mát nam thời trang, chống tia UV",
    price: 350000,
    quantity: 35,
    category: "Phụ kiện",
    image: "https://picsum.photos/200/200",
    raitings: 3,
  },
  {
    id: 13,
    name: "Mũ len nữ",
    description: "Mũ len nữ ấm áp, phong cách Hàn Quốc",
    price: 120000,
    quantity: 40,
    category: "Phụ kiện",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 14,
    name: "Giày cao gót nữ",
    description: "Giày cao gót nữ thanh lịch, quyến rũ",
    price: 500000,
    quantity: 25,
    category: "Giày",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 15,
    name: "Ví da nam",
    description: "Ví da nam sang trọng, đẳng cấp",
    price: 400000,
    quantity: 30,
    category: "Phụ kiện",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 16,
    name: "Dây chuyền nữ",
    description: "Dây chuyền nữ mạ vàng, thiết kế tinh tế",
    price: 250000,
    quantity: 45,
    category: "Phụ kiện",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
  {
    id: 17,
    name: "Lọ nước hoa nữ",
    description: "Lọ nước hoa nữ hương thơm quyến rũ",
    price: 600000,
    quantity: 20,
    category: "Mỹ phẩm",
    image: "https://picsum.photos/200/200",
    raitings: 3.5,
  },
  {
    id: 18,
    name: "Bộ trang điểm nữ",
    description: "Bộ trang điểm nữ đầy đủ dụng cụ",
    price: 450000,
    quantity: 35,
    category: "Mỹ phẩm",
    image: "https://picsum.photos/200/200",
    raitings: 3,
  },
  {
    id: 19,
    name: "Máy sấy tóc",
    description: "Máy sấy tóc công suất cao, tiện lợi",
    price: 280000,
    quantity: 50,
    category: "Thiết bị gia dụng",
    image: "https://picsum.photos/200/200",
    raitings: 4,
  },
  {
    id: 20,
    name: "Bàn ủi hơi nước",
    description: "Bàn ủi hơi nước giúp ủi đồ nhanh chóng, phẳng phiu",
    price: 550000,
    quantity: 40,
    category: "Thiết bị gia dụng",
    image: "https://picsum.photos/200/200",
    raitings: 5,
  },
];
router.get("/products", (req, res) => {
  res.send(productData);
});
router.get("/", (req, res) => {
  res.send(productData);
});

module.exports = router;
