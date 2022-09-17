// Membuat variabel dengan nama themeToggle yang diambil dari id theme-toggle yang ada di ikon bulan.
const themeToggle = document.getElementById('theme-toggle')

// Membuat variabel dark-theme. "min, dark-theme ini dari mana? yaitu ada di file style.css dibagian variabel warna untuk dark theme"
const darkTheme = 'dark-theme'
// Membuat variabel lightTheme yang isinya ikon lampu, jadi kalo mau ganti icon light theme disini
const ligthTheme = 'uil-lightbulb-alt'

// Membuat variabel untuk localstorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// membuat variabel currentTheme. jadi ketika itu darktheme maka gelap, jika tidak maka terang
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// membuat variabel currentIco. jadi ketika itu lightTheme maka kasih ikon bulan, jika tidak maka ikon lampu
const getCurrentIcon = () => themeToggle.classList.contains(ligthTheme) ? 'uil-moon' : 'uil_sun'

// Logika, selectedTheme ini di ambil dari variabel selectedTheme yang sudah dibuat
if (selectedTheme) {
    // jika localStorage.getItem('selected-theme') itu sama dengan dark maka add/menambahkan jika tidak remove/hapus
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    // themeToggle tambahkan class list yaitu selectedIcon, jika selectedIcon sama dengan ikon bulan maka add jika tidak remove
    themeToggle.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](ligthTheme)
}

// themeToggle jika diclick maka ganti darktheme, dan sebaliknya.
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeToggle.classList.toggle(ligthTheme)
    /*
        menyimpan tema di localstorage. jadi ketika direfresh website itu ga berubah temanya, masih sama..
        jika tidak menggunakan localstorage ini maka ketika direfresh yang tadinya darkmode maka kembali jadi light theme
    */
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});