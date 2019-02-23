urlHeiloo = 'https://www.jaap.nl/koophuizen/noord+holland/alkmaar+en+omgeving/heiloo/1-dag'
def nieuweHuizen(url):
    html = urlopen(url)
    bs = BeautifulSoup(html.read(), 'html.parser')
    #print(bs.a)
    divje = bs.findAll("a", {"class" : "property-inner"})

    filenaam = "huizen.csv"
    tijd = str(now.strftime("%Y %B %d"))

    f = open(filenaam, "w")
    header = "adres, postcode, Woonplaats, prijs, datum, link\n"
    f.write(header)
    #f = open(filenaam, "a")




    for dif in divje:
        adress = dif.findAll("h2", {"class":"property-address-street"})
        adres = adress[0].text
        zipWoonplaatss = dif.findAll("div",{"class": "property-address-zipcity"})
        zipWoonplaats = zipWoonplaatss[0].text
        prijsFind = dif.findAll("div",{"class": "property-price"})
        prijs = prijsFind[0].text
        print(adres + "\n " + zipWoonplaats.replace(",  ", " ") + "\n " + prijs + "\n Gezien op: " + tijd + "\n" )
        f.write(adres + ", " + zipWoonplaats + ", " + prijs + ", " + tijd + "\n")
        #print(dif)

    f.close()
