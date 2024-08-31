// Scroll to target section (table)
document.getElementById("scroll-to-table").addEventListener("click", function() {
    console.log("Button clicked");  // 这条消息应该会出现在Console中
    document.getElementById("schedule_table").scrollIntoView({ behavior: "smooth" });
});

// Scroll to top of the page
document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});