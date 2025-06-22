function findoffer() {
    const foodname = document.getElementById('search').value;
    if (foodname == "PBM") {
        document.getElementById('offered').textContent = "Paneer Butter Masala 20%off";
    }

    else if (foodname == "CHBF") {
        document.getElementById('offered').textContent = "Chicken Biryani Full 10% off";
    }
    else if (foodname == "MD") {
        document.getElementById('offered').textContent = "Masala Dosa no offers";
    }
    else if (foodname == "VG") {
        document.getElementById('offered').textContent = "Veg pulao get 5% off";
    }
    else if (foodname == "MRJ") {
        document.getElementById('offered').textContent = "Mutton Rogan Josh get 15% off";
    }

    else if (foodname == "CB") {
        document.getElementById('offered').textContent = "Chole Bhature get 20% off";
    }

    else if (foodname == "HH") {
        document.getElementById('offered').textContent = "Hyderabadi Haleem get 3% off";
    }
    else if (foodname == "PP") {
        document.getElementById('offered').textContent = "Palak Paneer get 3% off";
    }
    else if (foodname == "TCH") {
        document.getElementById('offered').textContent = "Tandoori Chicken Half 5% off";
    }
}