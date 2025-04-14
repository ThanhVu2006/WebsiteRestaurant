document.addEventListener('DOMContentLoaded', () => {
    // Lấy hai dropdown
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
  
    // Hàm lọc món ăn
    function filterItems() {
      // Lấy giá trị từ dropdown
      const selectedCategory = categoryFilter.value;
      const selectedPrice = priceFilter.value;
  
      // Lấy tất cả món ăn
      const items = document.querySelectorAll('.sanpham');
  
      // Duyệt qua từng món ăn
      items.forEach(item => {
        const category = item.getAttribute('data-category');
        const price = parseFloat(item.getAttribute('data-price'));
  
        // Kiểm tra điều kiện danh mục
        const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
  
        // Kiểm tra điều kiện giá
        let priceMatch = true;
        if (selectedPrice === 'low') {
          priceMatch = price < 50000;
        } else if (selectedPrice === 'medium') {
          priceMatch = price >= 50000 && price <= 100000;
        } else if (selectedPrice === 'high') {
          priceMatch = price > 100000;
        }
  
        // Hiển thị hoặc ẩn món ăn
        if (categoryMatch && priceMatch) {
          item.parentElement.style.display = 'block'; // Hiển thị sanpham-container
        } else {
          item.parentElement.style.display = 'none'; // Ẩn sanpham-container
        }
      });
    }
  
    // Gắn sự kiện thay đổi cho cả hai dropdown
    categoryFilter.addEventListener('change', filterItems);
    priceFilter.addEventListener('change', filterItems);
  
    // Chạy lọc lần đầu khi tải trang (hiển thị tất cả)
    filterItems();
  });