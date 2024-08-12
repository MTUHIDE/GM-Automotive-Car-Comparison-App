from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
import os
import requests
import warnings
import shutil

warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL 1.1.1+")



chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
driver.maximize_window()
driver.get("https://www.gmc.com/view-inventory/canyon/details#?radius=500&years=2024&makes=GMC&filterconfigkey=GMC-2024-Canyon&models=Canyon&requestedPostalcode=49931&sortby=bestMatch:desc,distance:asc,netPrice:asc&postalcode=49931&scrollposition=130&vin=1GTP6BEK4R1213124&primarydealerdistance=1.5&bac=291446&dealerSearchBy=bac&brand=GMC&customerType=GC&open-panel=Hours&primarydealerid=291446&primarydealerpostalcode=49931&primarydealername=KEWEENAW%20CHEVROLET%20GMC&primarydealerphone=9063372412")

# Allow the page to load
#time.sleep(5)

# Initialize lists to store data
#car_details = []
#vin_numbers = []
#image_urls = []

# Create images directory if not exists
# os.makedirs('images', exist_ok=True)

#car name
try:
    car_name = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-info/section[1]/div/div/span[1]')
    print("Car Name:", car_name.text)

except Exception as e:
    print(f"An error occurred while getting car name: {e}")

#drive type
try:
    drive_type = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-attributes/section/div/div[7]/span[3]')
    print("Drive Trpe:", drive_type.text)

except Exception as e:
    print(f"An error occurred while getting drive type: {e}")

#trim option
try:
    trim_option = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-info/section[1]/div/div/span[2]/span[3]')
    print("Trim Option:", drive_type.text)

except Exception as e:
    print(f"An error occurred while getting trim option: {e}")

#milage
try:
    EPA_EST_MPG = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-attributes/section/div/div[1]/span[3]/gm-translate')
    print("Milage:", EPA_EST_MPG.text)

except Exception as e:
    print(f"An error occurred while getting the milage: {e}")

#engine
try:
    engine_type = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-attributes/section/div/div[2]/span[3]')
    print("engine type:", engine_type.text)

except Exception as e:
    print(f"An error occurred while getting the engine: {e}")

#transmission
try:
    transmission = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-attributes/section/div/div[1]/span[3]/gm-translate')
    print("Transmission:", transmission.text)

except Exception as e:
    print(f"An error occurred while getting the transmission: {e}")

#fuel type
try:
    fuel_type = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-attributes/section/div/div[6]/span[3]')
    print("Milage:", fuel_type.text)

except Exception as e:
    print(f"An error occurred while getting the fuel type: {e}")

#horse power
try:
    horse_power = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[3]/main/gmst-vdp-vehicle-attributes/section/div/div[8]/span[3]')
    print("Horse Power:", horse_power.text)

except Exception as e:
    print(f"An error occurred while getting the horse power: {e}")

#car image

try:
    car_image = driver.find_element('xpath', '/html/body/main/gmst-vdp-app/section[2]/gmst-gallery-strip/div/div/gmwc-carousel/gmwc-carousel-pane[2]/img')
    url = car_image.get_attribute('src')
    print("Horse Power:", horse_power.text)

    response = requests.get(url,stream='True')
    with open('img.png', 'wb') as out_file:
        shutil.copyfileobj(response.raw, out_file)
    del response    


except Exception as e:
    print(f"An error occurred while getting car image: {e}")

driver.quit()