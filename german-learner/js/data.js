const vocabularyData = [
  {
    "article": "der",
    "german": "Name",
    "plural": ",-n",
    "english": "name",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "der",
    "german": "Vorname",
    "plural": ",-n",
    "english": "first name",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "der",
    "german": "Nachname",
    "plural": ",-n",
    "english": "last name",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "die",
    "german": "Stadt",
    "plural": ",-\"e",
    "english": "the city",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "das",
    "german": "ist Herr/Frau ...",
    "plural": "",
    "english": "This is Mr./Ms. ...",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "die",
    "german": "E-Mail-Adresse",
    "plural": ",-n",
    "english": "e-mail address",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "die",
    "german": "Handynummer",
    "plural": ",-n",
    "english": "mobile number",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "die",
    "german": "Telefonnummer",
    "plural": ",-n",
    "english": "phone number",
    "category": "Lektion 1: Kennenlernen - sich vorstellen"
  },
  {
    "article": "die",
    "german": "Schweiz",
    "plural": "",
    "english": "Switzerland",
    "category": "Lektion 1: Kennenlernen - Länder und Sprachen"
  },
  {
    "article": "das",
    "german": "Land",
    "plural": ",-\"er",
    "english": "country",
    "category": "Lektion 1: Kennenlernen - Länder und Sprachen"
  },
  {
    "article": "die",
    "german": "Sprache",
    "plural": ",-n",
    "english": "language",
    "category": "Lektion 1: Kennenlernen - Länder und Sprachen"
  },
  {
    "article": "die",
    "german": "Antwort",
    "plural": ",-en",
    "english": "answer",
    "category": "Lektion 1: Kennenlernen - im Kurs"
  },
  {
    "article": "der",
    "german": "Partner",
    "plural": ",-",
    "english": "partner",
    "category": "Lektion 1: Kennenlernen - im Kurs"
  },
  {
    "article": "die",
    "german": "Partnerin",
    "plural": ",-nen",
    "english": "partner",
    "category": "Lektion 1: Kennenlernen - im Kurs"
  },
  {
    "article": "die",
    "german": "Person",
    "plural": ",-en",
    "english": "person",
    "category": "Lektion 1: Kennenlernen - im Kurs"
  },
  {
    "article": "der",
    "german": "Text",
    "plural": ",-e",
    "english": "text",
    "category": "Lektion 1: Kennenlernen - im Kurs"
  },
  {
    "article": "das",
    "german": "Wort",
    "plural": ",-\"er",
    "english": "word",
    "category": "Lektion 1: Kennenlernen - im Kurs"
  },
  {
    "article": "die",
    "german": "Autobahn",
    "plural": ",-en",
    "english": "highway",
    "category": "Lektion 1: Kennenlernen - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Flasche",
    "plural": ",-n",
    "english": "bottle",
    "category": "Lektion 1: Kennenlernen - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Kindergarten",
    "plural": ",-\"",
    "english": "kindergarten",
    "category": "Lektion 1: Kennenlernen - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Koffer",
    "plural": ",-",
    "english": "suitcase",
    "category": "Lektion 1: Kennenlernen - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "verstehe ich nicht.",
    "plural": "",
    "english": "I don't understand that.",
    "category": "Lektion 1: Kennenlernen - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Hobby",
    "plural": ",-s",
    "english": "hobby",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Buch",
    "plural": ",-\"er",
    "english": "book",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Café",
    "plural": ",-s",
    "english": "café",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "der",
    "german": "Computer",
    "plural": ",-",
    "english": "computer",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "die",
    "german": "Verabredung",
    "plural": ",-en",
    "english": "meeting",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "der",
    "german": "Freund",
    "plural": ",-e",
    "english": "friend",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "die",
    "german": "Freundin",
    "plural": ",-nen",
    "english": "friend",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "die",
    "german": "Leute (Pl.)",
    "plural": "",
    "english": "people (Pl.)",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "der",
    "german": "Fußball (Sg.)",
    "plural": "",
    "english": "football",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Kino",
    "plural": ",-s",
    "english": "cinema",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Theater",
    "plural": ",-",
    "english": "theater",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Museum",
    "plural": ",Museen",
    "english": "museum",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "die",
    "german": "Musik (Sg.)",
    "plural": "",
    "english": "music",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Schwimmbad",
    "plural": ",-\"er",
    "english": "swimming pool",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "das",
    "german": "Foto",
    "plural": ",-s",
    "english": "photo",
    "category": "Lektion 2: Freunde, Kollegen und ich - in der Freizeit"
  },
  {
    "article": "der",
    "german": "Beruf",
    "plural": ",-e",
    "english": "profession",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Arzt",
    "plural": ",-\"e",
    "english": "doctor",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Ärztin",
    "plural": ",-nen",
    "english": "doctor",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "das",
    "german": "Krankenhaus",
    "plural": ",-\"er",
    "english": "hospital",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Friseur",
    "plural": ",-e",
    "english": "hairdresser",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Friseurin",
    "plural": ",-nen",
    "english": "hairdresser",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Handwerkerin",
    "plural": ",-nen",
    "english": "craftswoman",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Journalist",
    "plural": ",-en",
    "english": "journalist",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Kellnerin",
    "plural": ",-nen",
    "english": "waitress",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Koch",
    "plural": ",-\"e",
    "english": "cook",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Köchin",
    "plural": ",-nen",
    "english": "cook",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Krankenpfleger",
    "plural": ",-",
    "english": "male nurse",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "das",
    "german": "Restaurant",
    "plural": ",-s",
    "english": "restaurant",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Kollege",
    "plural": ",-n",
    "english": "colleague",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Kollegin",
    "plural": ",-nen",
    "english": "colleague",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Firma",
    "plural": ",Firmen",
    "english": "company",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Lehrer",
    "plural": ",-",
    "english": "teacher",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Schule",
    "plural": ",-n",
    "english": "school",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Kurs",
    "plural": ",-e",
    "english": "course",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Mechanikerin",
    "plural": ",-nen",
    "english": "mechanic",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Polizist",
    "plural": ",-en",
    "english": "policeman",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Studentin",
    "plural": ",-nen",
    "english": "student",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Universität",
    "plural": ",-en",
    "english": "university",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "das",
    "german": "Seminar",
    "plural": ",-e",
    "english": "seminar",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Taxifahrer",
    "plural": ",-",
    "english": "taxi driver",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "das",
    "german": "Taxi",
    "plural": ",-s",
    "english": "taxi",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "das",
    "german": "Auto",
    "plural": ",-s",
    "english": "car",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "die",
    "german": "Verkäuferin",
    "plural": ",-nen",
    "english": "saleswoman",
    "category": "Lektion 2: Freunde, Kollegen und ich - Berufe und Arbeit"
  },
  {
    "article": "der",
    "german": "Abend",
    "plural": ",-e",
    "english": "evening",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "der",
    "german": "Nachmittag",
    "plural": ",-e",
    "english": "afternoon",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "der",
    "german": "Moment",
    "plural": ",-e",
    "english": "moment",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "die",
    "german": "Stunde",
    "plural": ",-n",
    "english": "hour",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "der",
    "german": "Tag",
    "plural": ",-e",
    "english": "day",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "die",
    "german": "Woche",
    "plural": ",-n",
    "english": "week",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "das",
    "german": "Wochenende",
    "plural": ",-n",
    "english": "weekend",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "der",
    "german": "Wochentag",
    "plural": ",-e",
    "english": "weekday",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "das",
    "german": "Jahr",
    "plural": ",-e",
    "english": "year",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "der",
    "german": "Termin",
    "plural": ",-e",
    "english": "appointment",
    "category": "Lektion 2: Freunde, Kollegen und ich - Zeit"
  },
  {
    "article": "die",
    "german": "Information",
    "plural": ",-en",
    "english": "information",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "der",
    "german": "Familienname",
    "plural": ",-n",
    "english": "family name",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "die",
    "german": "Adresse",
    "plural": ",-n",
    "english": "address",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "die",
    "german": "Straße",
    "plural": ",-n",
    "english": "street",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "die",
    "german": "Hausnummer",
    "plural": ",-n",
    "english": "house number",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "die",
    "german": "Postleitzahl",
    "plural": ",-en",
    "english": "postal code",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "der",
    "german": "Wohnort",
    "plural": ",-e",
    "english": "place of residence",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "das",
    "german": "Geburtsdatum",
    "plural": ",-daten",
    "english": "date of birth",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "der",
    "german": "Geburtsort",
    "plural": ",-e",
    "english": "place of birth",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "das",
    "german": "Formular",
    "plural": ",-e",
    "english": "form",
    "category": "Lektion 2: Freunde, Kollegen und ich - Informationen zur Person"
  },
  {
    "article": "die",
    "german": "Notiz",
    "plural": ",-en (Machen Sie Notizen.)",
    "english": "note",
    "category": "Lektion 2: Freunde, Kollegen und ich - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Beispiel",
    "plural": ",-e",
    "english": "example",
    "category": "Lektion 2: Freunde, Kollegen und ich - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Schlüssel",
    "plural": ",-",
    "english": "key",
    "category": "Lektion 2: Freunde, Kollegen und ich - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Wörterbuch",
    "plural": ",-\"er",
    "english": "dictionary",
    "category": "Lektion 2: Freunde, Kollegen und ich - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Zimmer",
    "plural": ",-",
    "english": "room",
    "category": "Lektion 2: Freunde, Kollegen und ich - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Mensch",
    "plural": ",-en",
    "english": "person / human",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "das",
    "german": "Haus",
    "plural": ",-\"er",
    "english": "house",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "das",
    "german": "Rathaus",
    "plural": ",-\"er",
    "english": "town hall",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "das",
    "german": "Konzerthaus",
    "plural": ",-\"er",
    "english": "concert hall",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "die",
    "german": "Kirche",
    "plural": ",-n",
    "english": "church",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Turm",
    "plural": ",-\"e",
    "english": "tower",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "das",
    "german": "Hotel",
    "plural": ",-s",
    "english": "hotel",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "die",
    "german": "Brücke",
    "plural": ",-n",
    "english": "bridge",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Park",
    "plural": ",-s",
    "english": "park",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Markt",
    "plural": ",-\"e",
    "english": "market",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Bahnhof",
    "plural": ",-\"e",
    "english": "train station",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Hafen",
    "plural": ",-\"",
    "english": "harbor",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "See",
    "plural": ",-n",
    "english": "lake",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Fluss",
    "plural": ",-\"e",
    "english": "river",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "das",
    "german": "Meer",
    "plural": ",-e",
    "english": "sea",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "das",
    "german": "ist ...",
    "plural": "",
    "english": "That is ...",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "die",
    "german": "Station",
    "plural": ",-en",
    "english": "station",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Ort",
    "plural": ",-e",
    "english": "place",
    "category": "Lektion 3: In der Stadt unterwegs - eine Stadttour"
  },
  {
    "article": "der",
    "german": "Meter",
    "plural": ",-",
    "english": "meter",
    "category": "Lektion 3: In der Stadt unterwegs - Maße angeben"
  },
  {
    "article": "der",
    "german": "Kilometer",
    "plural": ",-",
    "english": "kilometer",
    "category": "Lektion 3: In der Stadt unterwegs - Maße angeben"
  },
  {
    "article": "die",
    "german": "Kosten (Pl.)",
    "plural": "",
    "english": "costs (Pl.)",
    "category": "Lektion 3: In der Stadt unterwegs - Maße angeben"
  },
  {
    "article": "der",
    "german": "Euro",
    "plural": ",-s",
    "english": "Euro",
    "category": "Lektion 3: In der Stadt unterwegs - Maße angeben"
  },
  {
    "article": "das",
    "german": "Fahrrad",
    "plural": ",-\"er",
    "english": "bicycle",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "der",
    "german": "Bus",
    "plural": ",-se",
    "english": "bus",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "die",
    "german": "Straßenbahn",
    "plural": ",-en",
    "english": "tram",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "der",
    "german": "Zug",
    "plural": ",-\"e",
    "english": "train",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "die",
    "german": "U-Bahn",
    "plural": ",-en",
    "english": "subway",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "die",
    "german": "S-Bahn",
    "plural": ",-en",
    "english": "suburban train",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "das",
    "german": "Schiff",
    "plural": ",-e",
    "english": "ship",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "das",
    "german": "Flugzeug",
    "plural": ",-e",
    "english": "airplane",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "die",
    "german": "Fahrkarte",
    "plural": ",-n",
    "english": "ticket",
    "category": "Lektion 3: In der Stadt unterwegs - Verkehrsmittel"
  },
  {
    "article": "der",
    "german": "Weg",
    "plural": ",-e",
    "english": "path / way",
    "category": "Lektion 3: In der Stadt unterwegs - einen Weg beschreiben"
  },
  {
    "article": "das",
    "german": "ist ganz einfach.",
    "plural": "",
    "english": "That is quite simple.",
    "category": "Lektion 3: In der Stadt unterwegs - einen Weg beschreiben"
  },
  {
    "article": "die",
    "german": "Mitte (Sg.)",
    "plural": "",
    "english": "middle",
    "category": "Lektion 3: In der Stadt unterwegs - einen Weg beschreiben"
  },
  {
    "article": "der",
    "german": "Plan",
    "plural": ",-\"e",
    "english": "plan / map",
    "category": "Lektion 3: In der Stadt unterwegs - einen Weg beschreiben"
  },
  {
    "article": "der",
    "german": "Start (Sg.)",
    "plural": "",
    "english": "start",
    "category": "Lektion 3: In der Stadt unterwegs - einen Weg beschreiben"
  },
  {
    "article": "das",
    "german": "Ziel",
    "plural": ",-e",
    "english": "goal / destination",
    "category": "Lektion 3: In der Stadt unterwegs - einen Weg beschreiben"
  },
  {
    "article": "das",
    "german": "Event",
    "plural": ",-s",
    "english": "event",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "das",
    "german": "Festival",
    "plural": ",-s",
    "english": "festival",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "das",
    "german": "Ticket",
    "plural": ",-s",
    "english": "ticket",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "das",
    "german": "Publikum (Sg.)",
    "plural": "",
    "english": "audience",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Besucher",
    "plural": ",-",
    "english": "visitor",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "die",
    "german": "Besucherin",
    "plural": ",-nen",
    "english": "visitor",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Gast",
    "plural": ",-\"e",
    "english": "guest",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "das",
    "german": "Konzert",
    "plural": ",-e",
    "english": "concert",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "das",
    "german": "Orchester",
    "plural": ",-",
    "english": "orchestra",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Chor",
    "plural": ",-\"e",
    "english": "choir",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "die",
    "german": "Konzertkarte",
    "plural": ",-n",
    "english": "concert ticket",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Film",
    "plural": ",-e",
    "english": "film",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Schauspieler",
    "plural": ",-",
    "english": "actor",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "die",
    "german": "Schauspielerin",
    "plural": ",-nen",
    "english": "actor",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Star",
    "plural": ",-s",
    "english": "star",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "der",
    "german": "Regisseur",
    "plural": ",-e",
    "english": "director",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "die",
    "german": "Regisseurin",
    "plural": ",-nen",
    "english": "director",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "die",
    "german": "Ausstellung",
    "plural": ",-en",
    "english": "exhibition",
    "category": "Lektion 3: In der Stadt unterwegs - Events"
  },
  {
    "article": "die",
    "german": "Jahreszeit",
    "plural": ",-en",
    "english": "season",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Frühling",
    "plural": "",
    "english": "spring",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Sommer",
    "plural": "",
    "english": "summer",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Herbst",
    "plural": "",
    "english": "autumn",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Winter",
    "plural": "",
    "english": "winter",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Monat",
    "plural": ",-e",
    "english": "month",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Januar",
    "plural": "",
    "english": "January",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Februar",
    "plural": "",
    "english": "February",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "März",
    "plural": "",
    "english": "March",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "April",
    "plural": "",
    "english": "April",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Mai",
    "plural": "",
    "english": "May",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Juni",
    "plural": "",
    "english": "June",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Juli",
    "plural": "",
    "english": "July",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "August",
    "plural": "",
    "english": "August",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "September",
    "plural": "",
    "english": "September",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Oktober",
    "plural": "",
    "english": "October",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "November",
    "plural": "",
    "english": "November",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "der",
    "german": "Dezember",
    "plural": "",
    "english": "December",
    "category": "Lektion 3: In der Stadt unterwegs - Jahreszeiten & Monate"
  },
  {
    "article": "die",
    "german": "Gruppe",
    "plural": ",-n",
    "english": "group",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Bild",
    "plural": ",-er",
    "english": "picture",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Plakat",
    "plural": ",-e",
    "english": "poster",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Glück (Sg.) (So ein Glück!)",
    "plural": "",
    "english": "luck",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Test",
    "plural": ",-s (Heute ist kein Test!)",
    "english": "test",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Welt",
    "plural": ",-en",
    "english": "world",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Lösung",
    "plural": ",-en",
    "english": "solution",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "erste/zweite/ ... Mal",
    "plural": "",
    "english": "the first/second time",
    "category": "Lektion 3: In der Stadt unterwegs - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Obst (Sg.)",
    "plural": "",
    "english": "fruit",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Apfel",
    "plural": ",-\"",
    "english": "apple",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Banane",
    "plural": ",-n",
    "english": "banana",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Birne",
    "plural": ",-n",
    "english": "pear",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Gemüse (Sg.)",
    "plural": "",
    "english": "vegetables",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Gurke",
    "plural": ",-n",
    "english": "cucumber",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Kartoffel",
    "plural": ",-n",
    "english": "potato",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Salat",
    "plural": ",-e",
    "english": "lettuce / salad",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Tomate",
    "plural": ",-n",
    "english": "tomato",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Olive",
    "plural": ",-n",
    "english": "olive",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Zwiebel",
    "plural": ",-n",
    "english": "onion",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Brot",
    "plural": ",-e",
    "english": "bread",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Brötchen",
    "plural": ",-",
    "english": "bun",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Keks",
    "plural": ",-e",
    "english": "cookie",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Kuchen",
    "plural": ",-",
    "english": "cake",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Fleisch (Sg.)",
    "plural": "",
    "english": "meat",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Hähnchen",
    "plural": ",-",
    "english": "chicken",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Schinken",
    "plural": ",-",
    "english": "ham",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Wurst",
    "plural": ",-\"e",
    "english": "sausage",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Würstchen",
    "plural": ",-",
    "english": "little sausage",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Butter (Sg.)",
    "plural": "",
    "english": "butter",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Käse (Sg.)",
    "plural": "",
    "english": "cheese",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Milch (Sg.)",
    "plural": "",
    "english": "milk",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Sahne (Sg.)",
    "plural": "",
    "english": "cream",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Pfeffer (Sg.)",
    "plural": "",
    "english": "pepper",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Salz",
    "plural": ",-e",
    "english": "salt",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Zucker (Sg.)",
    "plural": "",
    "english": "sugar",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Essig",
    "plural": ",-e",
    "english": "vinegar",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Öl",
    "plural": ",-e",
    "english": "oil",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Nudel",
    "plural": ",-n",
    "english": "noodle",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Reis (Sg.)",
    "plural": "",
    "english": "rice",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Ei",
    "plural": ",-er",
    "english": "egg",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Fisch",
    "plural": ",-e",
    "english": "fish",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Schokolade",
    "plural": ",-n",
    "english": "chocolate",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Marmelade",
    "plural": ",-n",
    "english": "jam",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Müsli",
    "plural": ",-s",
    "english": "muesli",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Getränk",
    "plural": ",-e",
    "english": "drink",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Wasser",
    "plural": ",-",
    "english": "water",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Saft",
    "plural": ",-\"e",
    "english": "juice",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Limonade",
    "plural": ",-n",
    "english": "lemonade",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Cola",
    "plural": ",-s",
    "english": "cola",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Kaffee",
    "plural": ",-s",
    "english": "coffee",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Tee",
    "plural": ",-s",
    "english": "tea",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Bäckerei",
    "plural": ",-en",
    "english": "bakery",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Markt",
    "plural": ",-\"e",
    "english": "market",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Metzgerei",
    "plural": ",-en",
    "english": "butcher shop",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Supermarkt",
    "plural": ",-\"e",
    "english": "supermarket",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Packung",
    "plural": ",-en",
    "english": "package",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Becher",
    "plural": ",-",
    "english": "cup / container",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Dose",
    "plural": ",-n",
    "english": "can",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Stück",
    "plural": ",-e",
    "english": "piece",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "die",
    "german": "Tüte",
    "plural": ",-n",
    "english": "bag",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Gramm (g)",
    "plural": "",
    "english": "gram",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "das",
    "german": "Kilo(gramm) (kg)",
    "plural": "",
    "english": "kilo",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Liter (l)",
    "plural": "",
    "english": "liter",
    "category": "Lektion 4: Essen und Trinken - Lebensmittel"
  },
  {
    "article": "der",
    "german": "Einkaufswagen",
    "plural": ",-",
    "english": "shopping cart",
    "category": "Lektion 4: Essen und Trinken - beim Einkaufen"
  },
  {
    "article": "der",
    "german": "Preis",
    "plural": ",-e",
    "english": "price",
    "category": "Lektion 4: Essen und Trinken - beim Einkaufen"
  },
  {
    "article": "das",
    "german": "macht ... Euro",
    "plural": ",bitte.",
    "english": "That makes ... Euro,",
    "category": "Lektion 4: Essen und Trinken - beim Einkaufen"
  },
  {
    "article": "der",
    "german": "Kassenzettel",
    "plural": ",-",
    "english": "receipt",
    "category": "Lektion 4: Essen und Trinken - beim Einkaufen"
  },
  {
    "article": "das",
    "german": "Essen",
    "plural": ",-",
    "english": "food / meal",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "das",
    "german": "Frühstück",
    "plural": ",-e",
    "english": "breakfast",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "das",
    "german": "Mittagessen",
    "plural": ",-",
    "english": "lunch",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "das",
    "german": "Abendessen",
    "plural": ",-",
    "english": "dinner",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "das",
    "german": "Gericht",
    "plural": ",-e",
    "english": "dish",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "die",
    "german": "Suppe",
    "plural": ",-n",
    "english": "soup",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "die",
    "german": "Pizza",
    "plural": ",-s/Pizzen",
    "english": "pizza",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "die",
    "german": "Pommes frites (Pl.)",
    "plural": "",
    "english": "fries (Pl.)",
    "category": "Lektion 4: Essen und Trinken - beim Essen / Mahlzeiten"
  },
  {
    "article": "der",
    "german": "Morgen",
    "plural": ",- (morgens)",
    "english": "morning",
    "category": "Lektion 4: Essen und Trinken - Tageszeiten"
  },
  {
    "article": "der",
    "german": "Mittag",
    "plural": ",-e (mittags)",
    "english": "noon",
    "category": "Lektion 4: Essen und Trinken - Tageszeiten"
  },
  {
    "article": "der",
    "german": "Nachmittag",
    "plural": ",-e (nachmittags)",
    "english": "afternoon",
    "category": "Lektion 4: Essen und Trinken - Tageszeiten"
  },
  {
    "article": "der",
    "german": "Abend",
    "plural": ",-e (abends)",
    "english": "evening",
    "category": "Lektion 4: Essen und Trinken - Tageszeiten"
  },
  {
    "article": "die",
    "german": "Nacht",
    "plural": ",-\"e (nachts)",
    "english": "night",
    "category": "Lektion 4: Essen und Trinken - Tageszeiten"
  },
  {
    "article": "die",
    "german": "Einladung",
    "plural": ",-en",
    "english": "invitation",
    "category": "Lektion 4: Essen und Trinken - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Kantine",
    "plural": ",-n",
    "english": "canteen",
    "category": "Lektion 4: Essen und Trinken - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Nachricht",
    "plural": ",-en",
    "english": "message / news",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Uni",
    "plural": ",-s",
    "english": "university",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Mensa",
    "plural": ",Mensen",
    "english": "mensa",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Bibliothek",
    "plural": ",-en",
    "english": "library",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Musikschule",
    "plural": ",-n",
    "english": "music school",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Hausaufgabe",
    "plural": ",-n",
    "english": "homework",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Zeitung",
    "plural": ",-en",
    "english": "newspaper",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Homepage",
    "plural": ",-s",
    "english": "homepage",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "der",
    "german": "Stress (Sg.)",
    "plural": "",
    "english": "stress",
    "category": "Lektion 5: Alltag und Familie - Alltag"
  },
  {
    "article": "die",
    "german": "Uhr",
    "plural": ",-en",
    "english": "clock / time",
    "category": "Lektion 5: Alltag und Familie - Uhrzeit"
  },
  {
    "article": "die",
    "german": "Sekunde",
    "plural": ",-n",
    "english": "second",
    "category": "Lektion 5: Alltag und Familie - Uhrzeit"
  },
  {
    "article": "die",
    "german": "Minute",
    "plural": ",-n",
    "english": "minute",
    "category": "Lektion 5: Alltag und Familie - Uhrzeit"
  },
  {
    "article": "die",
    "german": "Stunde",
    "plural": ",-n",
    "english": "hour",
    "category": "Lektion 5: Alltag und Familie - Uhrzeit"
  },
  {
    "article": "die",
    "german": "Verspätung",
    "plural": ",-en",
    "english": "delay",
    "category": "Lektion 5: Alltag und Familie - Uhrzeit"
  },
  {
    "article": "die",
    "german": "Familie",
    "plural": ",-n",
    "english": "family",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "das",
    "german": "Baby",
    "plural": ",-s",
    "english": "baby",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "das",
    "german": "Kind",
    "plural": ",-er",
    "english": "child",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Junge",
    "plural": ",-n",
    "english": "boy",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "das",
    "german": "Mädchen",
    "plural": ",-",
    "english": "girl",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Sohn",
    "plural": ",-\"e",
    "english": "son",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Tochter",
    "plural": ",-\"",
    "english": "daughter",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Mutter",
    "plural": ",-\"",
    "english": "mother",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Vater",
    "plural": ",-\"",
    "english": "father",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Eltern (Pl.)",
    "plural": "",
    "english": "parents (Pl.)",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Bruder",
    "plural": ",-\"",
    "english": "brother",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Schwester",
    "plural": ",-n",
    "english": "sister",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Geschwister (Pl.)",
    "plural": "",
    "english": "siblings (Pl.)",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Großmutter",
    "plural": ",-\"",
    "english": "grandmother",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Oma",
    "plural": ",-s",
    "english": "grandma",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Großvater",
    "plural": ",-\"",
    "english": "grandfather",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Opa",
    "plural": ",-s",
    "english": "grandpa",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Großeltern (Pl.)",
    "plural": "",
    "english": "grandparents (Pl.)",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "der",
    "german": "Mann (mein Mann)",
    "plural": "",
    "english": "man / husband",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Frau (meine Frau)",
    "plural": "",
    "english": "woman / wife",
    "category": "Lektion 5: Alltag und Familie - Familie"
  },
  {
    "article": "die",
    "german": "Zeit",
    "plural": ",-en",
    "english": "time",
    "category": "Lektion 5: Alltag und Familie - Termine"
  },
  {
    "article": "die",
    "german": "Party",
    "plural": ",-s",
    "english": "party",
    "category": "Lektion 5: Alltag und Familie - Termine"
  },
  {
    "article": "die",
    "german": "Bar",
    "plural": ",-s",
    "english": "bar",
    "category": "Lektion 5: Alltag und Familie - Termine"
  },
  {
    "article": "der",
    "german": "Kalender",
    "plural": ",-",
    "english": "calendar",
    "category": "Lektion 5: Alltag und Familie - Termine"
  },
  {
    "article": "die",
    "german": "Besprechung",
    "plural": ",-en",
    "english": "meeting",
    "category": "Lektion 5: Alltag und Familie - Termine"
  },
  {
    "article": "der",
    "german": "Sport (Sg.)",
    "plural": "",
    "english": "sport",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Ball",
    "plural": ",-\"e",
    "english": "ball",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Motorrad",
    "plural": ",-\"er",
    "english": "motorcycle",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Geige",
    "plural": ",-n",
    "english": "violin",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Saxofon",
    "plural": ",-e",
    "english": "saxophone",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Trompete",
    "plural": ",-n",
    "english": "trumpet",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Hund",
    "plural": ",-e",
    "english": "dog",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Idee",
    "plural": ",-n",
    "english": "idea",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Problem",
    "plural": ",-e",
    "english": "problem",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Praxis",
    "plural": ",Praxen",
    "english": "practice / office",
    "category": "Lektion 5: Alltag und Familie - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Ausflug",
    "plural": ",-\"e",
    "english": "excursion",
    "category": "Lektion 6: Freizeit und Feste - Freizeitaktivitäten"
  },
  {
    "article": "die",
    "german": "Fahrradtour",
    "plural": ",-en",
    "english": "bicycle tour",
    "category": "Lektion 6: Freizeit und Feste - Freizeitaktivitäten"
  },
  {
    "article": "das",
    "german": "Picknick",
    "plural": ",-s",
    "english": "picnic",
    "category": "Lektion 6: Freizeit und Feste - Freizeitaktivitäten"
  },
  {
    "article": "das",
    "german": "Fest",
    "plural": ",-e",
    "english": "festival / party",
    "category": "Lektion 6: Freizeit und Feste - Feste / Partys"
  },
  {
    "article": "der",
    "german": "Geburtstag",
    "plural": ",-e",
    "english": "birthday",
    "category": "Lektion 6: Freizeit und Feste - Feste / Partys"
  },
  {
    "article": "das",
    "german": "Geschenk",
    "plural": ",-e",
    "english": "gift",
    "category": "Lektion 6: Freizeit und Feste - Feste / Partys"
  },
  {
    "article": "das",
    "german": "Datum (Sg.)",
    "plural": "",
    "english": "date",
    "category": "Lektion 6: Freizeit und Feste - Feste / Partys"
  },
  {
    "article": "die",
    "german": "Überraschung",
    "plural": ",-en",
    "english": "surprise",
    "category": "Lektion 6: Freizeit und Feste - Feste / Partys"
  },
  {
    "article": "die",
    "german": "Mail",
    "plural": ",-s",
    "english": "mail",
    "category": "Lektion 6: Freizeit und Feste - E-Mail"
  },
  {
    "article": "der",
    "german": "Betreff",
    "plural": ",-e",
    "english": "subject",
    "category": "Lektion 6: Freizeit und Feste - E-Mail"
  },
  {
    "article": "die",
    "german": "Anrede",
    "plural": ",-n",
    "english": "salutation",
    "category": "Lektion 6: Freizeit und Feste - E-Mail"
  },
  {
    "article": "die",
    "german": "Schorle",
    "plural": ",-n",
    "english": "spritzer",
    "category": "Lektion 6: Freizeit und Feste - Speisen und Getränke"
  },
  {
    "article": "das",
    "german": "Eis (Sg.)",
    "plural": "",
    "english": "ice",
    "category": "Lektion 6: Freizeit und Feste - Speisen und Getränke"
  },
  {
    "article": "die",
    "german": "Salami",
    "plural": ",-s",
    "english": "salami",
    "category": "Lektion 6: Freizeit und Feste - Speisen und Getränke"
  },
  {
    "article": "das",
    "german": "Schnitzel",
    "plural": ",-",
    "english": "schnitzel",
    "category": "Lektion 6: Freizeit und Feste - Speisen und Getränke"
  },
  {
    "article": "die",
    "german": "Tomatensuppe",
    "plural": ",-n",
    "english": "tomato soup",
    "category": "Lektion 6: Freizeit und Feste - Speisen und Getränke"
  },
  {
    "article": "der",
    "german": "Sandwich",
    "plural": ",-s",
    "english": "sandwich (m/n)",
    "category": "Lektion 6: Freizeit und Feste - Speisen und Getränke"
  },
  {
    "article": "der",
    "german": "Durst (Sg.)",
    "plural": "",
    "english": "thirst",
    "category": "Lektion 6: Freizeit und Feste - bestellen und bezahlen"
  },
  {
    "article": "der",
    "german": "Hunger (Sg.)",
    "plural": "",
    "english": "hunger",
    "category": "Lektion 6: Freizeit und Feste - bestellen und bezahlen"
  },
  {
    "article": "die",
    "german": "Speisekarte",
    "plural": ",-n",
    "english": "menu",
    "category": "Lektion 6: Freizeit und Feste - bestellen und bezahlen"
  },
  {
    "article": "die",
    "german": "Bestellung",
    "plural": ",-en",
    "english": "order",
    "category": "Lektion 6: Freizeit und Feste - bestellen und bezahlen"
  },
  {
    "article": "die",
    "german": "Rechnung",
    "plural": ",-en",
    "english": "bill",
    "category": "Lektion 6: Freizeit und Feste - bestellen und bezahlen"
  },
  {
    "article": "das",
    "german": "Trinkgeld (Sg.)",
    "plural": "",
    "english": "tip",
    "category": "Lektion 6: Freizeit und Feste - bestellen und bezahlen"
  },
  {
    "article": "die",
    "german": "Gabel",
    "plural": ",-n",
    "english": "fork",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "das",
    "german": "Messer",
    "plural": ",-",
    "english": "knife",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "der",
    "german": "Löffel",
    "plural": ",-",
    "english": "spoon",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "das",
    "german": "Glas",
    "plural": ",-\"er",
    "english": "glass",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "die",
    "german": "Tasse",
    "plural": ",-n",
    "english": "cup",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "der",
    "german": "Teller",
    "plural": ",-",
    "english": "plate",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "die",
    "german": "Serviette",
    "plural": ",-n",
    "english": "napkin",
    "category": "Lektion 6: Freizeit und Feste - Auf dem Tisch"
  },
  {
    "article": "die",
    "german": "Kneipe",
    "plural": ",-n",
    "english": "pub",
    "category": "Lektion 6: Freizeit und Feste - Lokale"
  },
  {
    "article": "das",
    "german": "Kaffeehaus",
    "plural": ",-\"er",
    "english": "coffee house",
    "category": "Lektion 6: Freizeit und Feste - Lokale"
  },
  {
    "article": "das",
    "german": "Lokal",
    "plural": ",-e",
    "english": "place / restaurant",
    "category": "Lektion 6: Freizeit und Feste - Lokale"
  },
  {
    "article": "der",
    "german": "Biergarten",
    "plural": ",-\"",
    "english": "beer garden",
    "category": "Lektion 6: Freizeit und Feste - Lokale"
  },
  {
    "article": "die",
    "german": "Bank",
    "plural": ",-\"e",
    "english": "bench",
    "category": "Lektion 6: Freizeit und Feste - Lokale"
  },
  {
    "article": "die",
    "german": "Selbstbedienung (Sg.)",
    "plural": "",
    "english": "self-service",
    "category": "Lektion 6: Freizeit und Feste - Lokale"
  },
  {
    "article": "das",
    "german": "Programm",
    "plural": ",-e",
    "english": "program",
    "category": "Lektion 6: Freizeit und Feste - Veranstaltungen"
  },
  {
    "article": "der",
    "german": "Treffpunkt",
    "plural": ",-e",
    "english": "meeting point",
    "category": "Lektion 6: Freizeit und Feste - Veranstaltungen"
  },
  {
    "article": "der",
    "german": "Eintritt",
    "plural": ",-e",
    "english": "entry",
    "category": "Lektion 6: Freizeit und Feste - Veranstaltungen"
  },
  {
    "article": "die",
    "german": "Anmeldung",
    "plural": ",-en",
    "english": "registration",
    "category": "Lektion 6: Freizeit und Feste - Veranstaltungen"
  },
  {
    "article": "die",
    "german": "Karte",
    "plural": ",-n",
    "english": "card / ticket",
    "category": "Lektion 6: Freizeit und Feste - Veranstaltungen"
  },
  {
    "article": "der",
    "german": "Spielplatz",
    "plural": ",-\"e",
    "english": "playground",
    "category": "Lektion 6: Freizeit und Feste - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Arbeitsalltag (Sg.)",
    "plural": "",
    "english": "working day",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Bäcker",
    "plural": ",-",
    "english": "baker",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Zahnarzt",
    "plural": ",-\"e",
    "english": "dentist",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Hausmeister",
    "plural": ",-",
    "english": "janitor",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Mitarbeiter",
    "plural": ",-",
    "english": "colleague",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "die",
    "german": "Mitarbeiterin",
    "plural": ",-nen",
    "english": "colleague",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "das",
    "german": "Praktikum",
    "plural": ",Praktika",
    "english": "internship",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Bericht",
    "plural": ",-e",
    "english": "report",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "die",
    "german": "Präsentation",
    "plural": ",-en",
    "english": "presentation",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Fehler",
    "plural": ",-",
    "english": "mistake",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "die",
    "german": "Pause",
    "plural": ",-n",
    "english": "pause",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "der",
    "german": "Urlaub",
    "plural": ",-e",
    "english": "vacation",
    "category": "Lektion 7: Arbeit und Beruf - Arbeit und Beruf"
  },
  {
    "article": "die",
    "german": "Medien (Pl.)",
    "plural": "",
    "english": "media (Pl.)",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "die",
    "german": "Datei",
    "plural": ",-en",
    "english": "file",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "der",
    "german": "Drucker",
    "plural": ",-",
    "english": "printer",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "das",
    "german": "Passwort",
    "plural": ",-\"er",
    "english": "password",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "der",
    "german": "Blog",
    "plural": ",-s",
    "english": "blog",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "der",
    "german": "Akku",
    "plural": ",-s",
    "english": "battery",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "das",
    "german": "WLAN (Sg.)",
    "plural": "",
    "english": "wifi",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "das",
    "german": "Netz",
    "plural": ",-e (Ich habe kein Netz.)",
    "english": "network",
    "category": "Lektion 7: Arbeit und Beruf - Medien"
  },
  {
    "article": "die",
    "german": "Bank",
    "plural": ",-en",
    "english": "bank",
    "category": "Lektion 7: Arbeit und Beruf - Bank"
  },
  {
    "article": "der",
    "german": "Automat",
    "plural": ",-en",
    "english": "ATM",
    "category": "Lektion 7: Arbeit und Beruf - Bank"
  },
  {
    "article": "das",
    "german": "Konto",
    "plural": ",Konten",
    "english": "account",
    "category": "Lektion 7: Arbeit und Beruf - Bank"
  },
  {
    "article": "die",
    "german": "Kontonummer",
    "plural": ",-n",
    "english": "account number",
    "category": "Lektion 7: Arbeit und Beruf - Bank"
  },
  {
    "article": "die",
    "german": "Kreditkarte",
    "plural": ",-n",
    "english": "credit card",
    "category": "Lektion 7: Arbeit und Beruf - Bank"
  },
  {
    "article": "der",
    "german": "Brief",
    "plural": ",-e",
    "english": "letter",
    "category": "Lektion 7: Arbeit und Beruf - Briefe"
  },
  {
    "article": "die",
    "german": "Post (Sg.)",
    "plural": "",
    "english": "post",
    "category": "Lektion 7: Arbeit und Beruf - Briefe"
  },
  {
    "article": "der",
    "german": "Absender",
    "plural": ",-",
    "english": "sender",
    "category": "Lektion 7: Arbeit und Beruf - Briefe"
  },
  {
    "article": "der",
    "german": "Empfänger",
    "plural": ",-",
    "english": "recipient",
    "category": "Lektion 7: Arbeit und Beruf - Briefe"
  },
  {
    "article": "die",
    "german": "Unterschrift",
    "plural": ",-en",
    "english": "signature",
    "category": "Lektion 7: Arbeit und Beruf - Briefe"
  },
  {
    "article": "das",
    "german": "Mitglied",
    "plural": ",-er",
    "english": "member",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "der",
    "german": "Kontakt",
    "plural": ",-e",
    "english": "contact",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "das",
    "german": "Lied",
    "plural": ",-er",
    "english": "song",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "die",
    "german": "Musikgruppe",
    "plural": ",-n",
    "english": "music group",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "die",
    "german": "Spezialität",
    "plural": ",-en",
    "english": "specialty",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "der",
    "german": "Small Talk",
    "plural": ",-s",
    "english": "small talk",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "das",
    "german": "Leben",
    "plural": ",-",
    "english": "life",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "der",
    "german": "Aufzug",
    "plural": ",-\"e",
    "english": "elevator",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "die",
    "german": "Politik (Sg.)",
    "plural": "",
    "english": "politics",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "die",
    "german": "Serie",
    "plural": ",-n",
    "english": "series",
    "category": "Lektion 7: Arbeit und Beruf - Club & Small Talk"
  },
  {
    "article": "die",
    "german": "Religion",
    "plural": ",-en",
    "english": "religion",
    "category": "Lektion 7: Arbeit und Beruf - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "meisten (Das mögen die meisten Leute nicht.)",
    "plural": "",
    "english": "the most",
    "category": "Lektion 7: Arbeit und Beruf - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Nachbar",
    "plural": ",-n / die Nachbarin, -nen",
    "english": "neighbor (m/f)",
    "category": "Lektion 7: Arbeit und Beruf - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Paket",
    "plural": ",-e",
    "english": "package",
    "category": "Lektion 7: Arbeit und Beruf - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Sprachinstitut",
    "plural": ",-e",
    "english": "language institute",
    "category": "Lektion 7: Arbeit und Beruf - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Sportlerin",
    "plural": ",-nen",
    "english": "athlete",
    "category": "Lektion 8: Fit und gesund - fit und gesund"
  },
  {
    "article": "die",
    "german": "Süßigkeit",
    "plural": ",-en",
    "english": "sweet",
    "category": "Lektion 8: Fit und gesund - fit und gesund"
  },
  {
    "article": "das",
    "german": "Alter (Sg.)",
    "plural": "",
    "english": "age",
    "category": "Lektion 8: Fit und gesund - persönliche Angaben"
  },
  {
    "article": "die",
    "german": "Größe",
    "plural": ",-n",
    "english": "size",
    "category": "Lektion 8: Fit und gesund - persönliche Angaben"
  },
  {
    "article": "das",
    "german": "Gewicht (Sg.)",
    "plural": "",
    "english": "weight",
    "category": "Lektion 8: Fit und gesund - persönliche Angaben"
  },
  {
    "article": "der",
    "german": "Körper",
    "plural": ",-",
    "english": "body",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Kopf",
    "plural": ",-\"e",
    "english": "head",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Hals",
    "plural": ",-\"e",
    "english": "neck",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Bauch",
    "plural": ",-\"e",
    "english": "stomach",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Rücken",
    "plural": ",-",
    "english": "back",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Arm",
    "plural": ",-e",
    "english": "arm",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "die",
    "german": "Hand",
    "plural": ",-\"e",
    "english": "hand",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Finger",
    "plural": ",-",
    "english": "finger",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "das",
    "german": "Bein",
    "plural": ",-e",
    "english": "leg",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "das",
    "german": "Knie",
    "plural": ",-",
    "english": "knee",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Fuß",
    "plural": ",-\"e",
    "english": "foot",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "das",
    "german": "Gesicht",
    "plural": ",-er",
    "english": "face",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Mund",
    "plural": ",-\"er",
    "english": "mouth",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Zahn",
    "plural": ",-\"e",
    "english": "tooth",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "das",
    "german": "Auge",
    "plural": ",-n",
    "english": "eye",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "das",
    "german": "Ohr",
    "plural": ",-en",
    "english": "ear",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "die",
    "german": "Nase",
    "plural": ",-n",
    "english": "nose",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "das",
    "german": "Haar",
    "plural": ",-e",
    "english": "hair",
    "category": "Lektion 8: Fit und gesund - Körperteile"
  },
  {
    "article": "der",
    "german": "Unfall",
    "plural": ",-\"e",
    "english": "accident",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "der",
    "german": "Schmerz",
    "plural": ",-en",
    "english": "pain",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "die",
    "german": "Wunde",
    "plural": ",-n",
    "english": "wound",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "der",
    "german": "Verband",
    "plural": ",-\"e",
    "english": "bandage",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "das",
    "german": "Pflaster",
    "plural": ",-",
    "english": "plaster",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "die",
    "german": "Salbe",
    "plural": ",-n",
    "english": "ointment",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "das",
    "german": "Rezept",
    "plural": ",-e",
    "english": "prescription",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "die",
    "german": "Apotheke",
    "plural": ",-n",
    "english": "pharmacy",
    "category": "Lektion 8: Fit und gesund - nach dem Unfall"
  },
  {
    "article": "der",
    "german": "Doktor",
    "plural": ",-en",
    "english": "doctor",
    "category": "Lektion 8: Fit und gesund - Besuch beim Arzt"
  },
  {
    "article": "die",
    "german": "Krankheit",
    "plural": ",-en",
    "english": "illness",
    "category": "Lektion 8: Fit und gesund - Besuch beim Arzt"
  },
  {
    "article": "der",
    "german": "Schnupfen",
    "plural": ",-",
    "english": "sniffles",
    "category": "Lektion 8: Fit und gesund - Besuch beim Arzt"
  },
  {
    "article": "das",
    "german": "Fieber (Sg.)",
    "plural": "",
    "english": "fever",
    "category": "Lektion 8: Fit und gesund - Besuch beim Arzt"
  },
  {
    "article": "die",
    "german": "...schmerzen (Pl.) (Halsschmerzen",
    "plural": ",",
    "english": "... pains (Pl.)",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Tablette",
    "plural": ",-n",
    "english": "tablet / pill",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "der",
    "german": "Saft",
    "plural": ",-\"e (Er nimmt einen Saft gegen den",
    "english": "syrup / juice",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "der",
    "german": "Tropfen",
    "plural": ",-",
    "english": "drop",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Spritze",
    "plural": ",-n",
    "english": "injection / shot",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "das",
    "german": "Hausmittel",
    "plural": ",-",
    "english": "home remedy",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Kontrolle",
    "plural": ",-n",
    "english": "control / check-up",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "der",
    "german": "Notarzt",
    "plural": ",-\"e",
    "english": "emergency doctor",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Physiotherapeutin",
    "plural": ",-nen",
    "english": "physiotherapist",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Übung",
    "plural": ",-en",
    "english": "exercise",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "der",
    "german": "Krankenpfleger",
    "plural": ",-",
    "english": "male nurse",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Laborantin",
    "plural": ",-nen",
    "english": "lab technician",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "das",
    "german": "Blut (Sg.)",
    "plural": "",
    "english": "blood",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "das",
    "german": "Ergebnis",
    "plural": ",-se",
    "english": "result",
    "category": "Lektion 8: Fit und gesund - Krankenhaus & Medikamente"
  },
  {
    "article": "die",
    "german": "Tafel",
    "plural": ",-n",
    "english": "blackboard",
    "category": "Lektion 8: Fit und gesund - im Kurs"
  },
  {
    "article": "das",
    "german": "Fenster",
    "plural": ",- (Mach bitte das Fenster auf.)",
    "english": "window",
    "category": "Lektion 8: Fit und gesund - im Kurs"
  },
  {
    "article": "die",
    "german": "Freizeit (Sg.)",
    "plural": "",
    "english": "free time",
    "category": "Lektion 8: Fit und gesund - andere wichtige Wörter"
  },
  {
    "article": "das",
    "german": "Experiment",
    "plural": ",-e",
    "english": "experiment",
    "category": "Lektion 8: Fit und gesund - andere wichtige Wörter"
  },
  {
    "article": "der",
    "german": "Tipp",
    "plural": ",-s",
    "english": "tip",
    "category": "Lektion 8: Fit und gesund - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "App",
    "plural": ",-s",
    "english": "app",
    "category": "Lektion 8: Fit und gesund - andere wichtige Wörter"
  },
  {
    "article": "die",
    "german": "Wohnung",
    "plural": ",-en",
    "english": "Apartment/Flat",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Hochhaus",
    "plural": ",\"-er",
    "english": "High-rise/Apartment building",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "WG",
    "plural": ",-s (Wohngemeinschaft)",
    "english": "Shared apartment",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Apartment",
    "plural": ",-s",
    "english": "Apartment",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Reihenhaus",
    "plural": ",\"-er",
    "english": "Terraced house",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Raum",
    "plural": ",\"-e",
    "english": "Room",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Bad",
    "plural": ",\"-er",
    "english": "Bath",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Dusche",
    "plural": ",-n",
    "english": "Shower",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Flur",
    "plural": ",-e",
    "english": "Hallway/Corridor",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Küche",
    "plural": ",-n",
    "english": "Kitchen",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Schlafzimmer",
    "plural": ",-",
    "english": "Bedroom",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Wohnzimmer",
    "plural": ",-",
    "english": "Living room",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Kinderzimmer",
    "plural": ",-",
    "english": "Children's room",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Balkon",
    "plural": ",-e",
    "english": "Balcony",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Terrasse",
    "plural": ",-n",
    "english": "Terrace",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Garten",
    "plural": ",\"-",
    "english": "Garden",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Treppe",
    "plural": ",-n",
    "english": "Stairs",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Tür",
    "plural": ",-en",
    "english": "Door",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Decke",
    "plural": ",-n",
    "english": "Ceiling/Blanket",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Erdgeschoss",
    "plural": ",-e",
    "english": "Ground floor",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Stock",
    "plural": ",\"-e (im zweiten Stock)",
    "english": "Floor/Story",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Lage (Sg.) (Die Lage ist zentral.)",
    "plural": "",
    "english": "Location",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Nähe (Sg.)",
    "plural": "",
    "english": "Proximity/Vicinity",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Zentrum",
    "plural": ",Zentren",
    "english": "Center",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Blick",
    "plural": ",-e (Der Blick aus dem",
    "english": "The view",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Möbel (Pl.)",
    "plural": "",
    "english": "Furniture (Pl.)",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Gerät",
    "plural": ",-e",
    "english": "Appliance/Device",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Lampe",
    "plural": ",-n",
    "english": "Lamp",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Licht",
    "plural": ",-er",
    "english": "Light",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Pflanze",
    "plural": ",-n",
    "english": "Plant",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Regal",
    "plural": ",-e",
    "english": "Shelf",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Schrank",
    "plural": ",\"-e",
    "english": "Cabinet/Wardrobe",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Schreibtisch",
    "plural": ",-e",
    "english": "Desk",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Sessel",
    "plural": ",-",
    "english": "Armchair",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Sofa",
    "plural": ",-s",
    "english": "Sofa",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Stuhl",
    "plural": ",\"-e",
    "english": "Chair",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Tisch",
    "plural": ",-e",
    "english": "Table",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Teppich",
    "plural": ",-e",
    "english": "Carpet/Rug",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Bett",
    "plural": ",-en",
    "english": "Bed",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Fernseher",
    "plural": ",-",
    "english": "Television",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Herd",
    "plural": ",-e",
    "english": "Stove/Oven",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Kaffeemaschine",
    "plural": ",-n",
    "english": "Coffee machine",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Kühlschrank",
    "plural": ",\"-e",
    "english": "Refrigerator",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Spülmaschine",
    "plural": ",-n",
    "english": "Dishwasher",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Waschmaschine",
    "plural": ",-n",
    "english": "Washing machine",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Anzeige",
    "plural": ",-n",
    "english": "Advertisement",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Vertrag",
    "plural": ",\"-e",
    "english": "Contract",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Miete",
    "plural": ",-n",
    "english": "Rent",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Vermieter",
    "plural": ",-",
    "english": "Landlord",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Umzug",
    "plural": ",\"-e",
    "english": "Move/Relocation",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Feier",
    "plural": ",-n",
    "english": "Celebration/Party",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "die",
    "german": "Blume",
    "plural": ",-n",
    "english": "Flower",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Baum",
    "plural": ",\"-e",
    "english": "Tree",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Holz",
    "plural": ",\"-er (Die Treppen sind aus",
    "english": "Wood",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "das",
    "german": "Heft",
    "plural": ",-e",
    "english": "Notebook/Exercise book",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Wunsch",
    "plural": ",\"-e",
    "english": "Wish",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Glückwunsch",
    "plural": ",\"-e",
    "english": "Congratulations/Good wish",
    "category": "Lektion 9: Wohnen"
  },
  {
    "article": "der",
    "german": "Arbeitsplatz",
    "plural": ",\"-e",
    "english": "Workplace",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Stelle",
    "plural": ",-n",
    "english": "Position/Job",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Job",
    "plural": ",-s",
    "english": "Job",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Saison-Job",
    "plural": ",-s",
    "english": "Seasonal job",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Karriere",
    "plural": ",-n (Karriere machen)",
    "english": "Career",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Projekt",
    "plural": ",-e",
    "english": "Project",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Aufgabe",
    "plural": ",-n",
    "english": "Task",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Bewerbung",
    "plural": ",-en",
    "english": "Application",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Profil",
    "plural": ",-e",
    "english": "Profile",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Internet (Sg.)",
    "plural": "",
    "english": "Internet",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Feierabend",
    "plural": ",-e",
    "english": "End of work day",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Händler",
    "plural": ",-",
    "english": "Dealer/Trader",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Händlerin",
    "plural": ",-nen",
    "english": "Dealer/Trader",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Ware",
    "plural": ",-n",
    "english": "Ware/Product",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Künstler",
    "plural": ",-",
    "english": "Artist",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Künstlerin",
    "plural": ",-nen",
    "english": "Artist",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Professor",
    "plural": ",-en",
    "english": "Professor",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Professorin",
    "plural": ",-nen",
    "english": "Professor",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Segellehrer",
    "plural": ",-",
    "english": "Sailing instructor",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Segellehrerin",
    "plural": ",-nen",
    "english": "Sailing instructor",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Sekretär",
    "plural": ",-e",
    "english": "Secretary",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Sekretärin",
    "plural": ",-nen",
    "english": "Secretary",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Hotelchef",
    "plural": ",-s",
    "english": "Hotel manager",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Hotelchefin",
    "plural": ",-nen",
    "english": "Hotel manager",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Baustelle",
    "plural": ",-n",
    "english": "Construction site",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Computerfirma",
    "plural": ",-firmen",
    "english": "Computer company",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Kaufhaus",
    "plural": ",\"-er",
    "english": "Department store",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Werkstatt",
    "plural": ",\"-en",
    "english": "Workshop",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Studium",
    "plural": ",Studien",
    "english": "Studies/Degree course",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Semester",
    "plural": ",-",
    "english": "Semester",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Unterricht (Sg.)",
    "plural": "",
    "english": "Instruction/Teaching",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Prüfung",
    "plural": ",-en",
    "english": "Exam/Test",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Statistik",
    "plural": ",-en",
    "english": "Statistics",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Liste",
    "plural": ",-n",
    "english": "List",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Anruf",
    "plural": ",-e",
    "english": "Call",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Anschluss",
    "plural": ",\"-e",
    "english": "Connection",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Durchwahl",
    "plural": ",-en",
    "english": "Extension (phone)",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Veranstaltung",
    "plural": ",-en",
    "english": "Event",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Karussell",
    "plural": ",-e",
    "english": "Carousel",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Weihnachtsmarkt",
    "plural": ",\"-e",
    "english": "Christmas market",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Attraktion",
    "plural": ",-en",
    "english": "Attraction",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Bühne",
    "plural": ",-n",
    "english": "Stage",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Statist",
    "plural": ",-en",
    "english": "Extra (actor)",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Statistin",
    "plural": ",-nen",
    "english": "Extra (actor)",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Zuschauer",
    "plural": ",-",
    "english": "Spectator",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Zuschauerin",
    "plural": ",-nen",
    "english": "Spectator",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Oper",
    "plural": ",-n",
    "english": "Opera",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Anfang",
    "plural": ",\"-e",
    "english": "Beginning",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Ende",
    "plural": ",-n",
    "english": "End",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Heimat (Sg.)",
    "plural": "",
    "english": "Home/Homeland",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "das",
    "german": "Ausland (Sg.)",
    "plural": "",
    "english": "Abroad",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Ehefrau",
    "plural": ",-en",
    "english": "Wife",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Ehemann",
    "plural": ",\"-er",
    "english": "Husband",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Nachrichten (Pl.)",
    "plural": "",
    "english": "News",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Radiosendung",
    "plural": ",-en",
    "english": "Radio broadcast",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Spaziergang",
    "plural": ",\"-e",
    "english": "Walk/Stroll",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "der",
    "german": "Tennisplatz",
    "plural": ",\"-e",
    "english": "Tennis court",
    "category": "Lektion 10: Arbeit"
  },
  {
    "article": "die",
    "german": "Kleidung (Sg.)",
    "plural": "",
    "english": "Clothing",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Klamotten (Pl.)",
    "plural": "",
    "english": "Clothes/Gear (colloq.)",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Hose",
    "plural": ",-n",
    "english": "Trousers/Pants",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Jeans",
    "plural": ",-",
    "english": "Jeans",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "T-Shirt",
    "plural": ",-s",
    "english": "T-shirt",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Hemd",
    "plural": ",-en",
    "english": "Shirt",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Pullover",
    "plural": ",- / der Pulli, -s",
    "english": "Pullover/Sweater",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Sweatshirt",
    "plural": ",-s",
    "english": "Sweatshirt",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Rock",
    "plural": ",\"-e",
    "english": "Skirt",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Blouse",
    "plural": ",-n",
    "english": "Blouse",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Kleid",
    "plural": ",-er",
    "english": "Dress",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Anzug",
    "plural": ",\"-e",
    "english": "Suit",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Krawatte",
    "plural": ",-n",
    "english": "Tie",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Mantel",
    "plural": ",\"-",
    "english": "Coat",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Jacke",
    "plural": ",-n",
    "english": "Jacket",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Schuh",
    "plural": ",-e",
    "english": "Shoe",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Stiefel",
    "plural": ",-",
    "english": "Boot",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Mütze",
    "plural": ",-n",
    "english": "Cap/Beanie",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Hut",
    "plural": ",\"-e",
    "english": "Hat",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Schal",
    "plural": ",-s",
    "english": "Scarf",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Tuch",
    "plural": ",\"-er",
    "english": "Cloth/Scarf",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Tasche",
    "plural": ",-n",
    "english": "Bag/Pocket",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Uhr",
    "plural": ",-en",
    "english": "Watch/Clock",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Schmuck (Sg.)",
    "plural": "",
    "english": "Jewelry",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Kleidergeschäft",
    "plural": ",-e",
    "english": "Clothing store",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Kaufhaus",
    "plural": ",\"-er",
    "english": "Department store",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Laden",
    "plural": ",\"-",
    "english": "Shop/Store",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Buchladen",
    "plural": ",\"-",
    "english": "Bookstore",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Secondhand-Laden",
    "plural": ",\"-",
    "english": "Second-hand shop",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Shop",
    "plural": ",-s",
    "english": "Shop",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Kasse",
    "plural": ",-n",
    "english": "Cash desk/Register",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Mode",
    "plural": ",-n",
    "english": "Fashion",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Produkt",
    "plural": ",-e",
    "english": "Product",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Papier",
    "plural": ",-e",
    "english": "Paper",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Kugelschreiber",
    "plural": ",-",
    "english": "Ballpoint pen",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Bleistift",
    "plural": ",-e",
    "english": "Pencil",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Zeitschrift",
    "plural": ",-en",
    "english": "Magazine",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Kosmetik",
    "plural": ",-a",
    "english": "Cosmetics",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Parfüm",
    "plural": ",-e/-s",
    "english": "Perfume",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Duschgel",
    "plural": ",-s",
    "english": "Shower gel",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Kamera",
    "plural": ",-s",
    "english": "Camera",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "USB-Stick",
    "plural": ",-s",
    "english": "USB stick",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Haushalt",
    "plural": ",-e",
    "english": "Household",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Untergeschoss",
    "plural": ",-e",
    "english": "Basement/Lower floor",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Öffnungszeiten (Pl.)",
    "plural": "",
    "english": "Opening hours (Pl.)",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Schild",
    "plural": ",-er",
    "english": "Sign",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Hauptstadt",
    "plural": ",\"-e",
    "english": "Capital city",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Design",
    "plural": ",-s",
    "english": "Design",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Architektur (Sg.)",
    "plural": "",
    "english": "Architecture",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "das",
    "german": "Souvenir",
    "plural": ",-s",
    "english": "Souvenir",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Erfindung",
    "plural": ",-en",
    "english": "Invention",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "die",
    "german": "Sache",
    "plural": ",-n",
    "english": "Thing/Matter",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Hof",
    "plural": ",\"-e",
    "english": "Yard/Courtyard",
    "category": "Lektion 11: Kleidung"
  },
  {
    "article": "der",
    "german": "Badeurlaub",
    "plural": ",-e",
    "english": "Beach holiday",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Campingurlaub",
    "plural": ",-e",
    "english": "Camping holiday",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Stadturlaub",
    "plural": ",-e",
    "english": "City trip",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Berg",
    "plural": ",-e",
    "english": "Mountain",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Insel",
    "plural": ",-n",
    "english": "Island",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Sehenswürdigkeit",
    "plural": ",-en",
    "english": "Sight/Landmark",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Stadtführung",
    "plural": ",-en",
    "english": "City tour",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Strand",
    "plural": ",\"-e",
    "english": "Beach",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Zoo",
    "plural": ",-s",
    "english": "Zoo",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Postkarte",
    "plural": ",-n",
    "english": "Postcard",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Gepäck (Sg.)",
    "plural": "",
    "english": "Luggage",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Reisetasche",
    "plural": ",-n",
    "english": "Travel bag",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Badeanzug",
    "plural": ",\"-e",
    "english": "Swimsuit",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Badehose",
    "plural": ",-n",
    "english": "Swimming trunks",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Bikini",
    "plural": ",-s",
    "english": "Bikini",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Regenjacke",
    "plural": ",-n",
    "english": "Rain jacket",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Regenschirm",
    "plural": ",-e",
    "english": "Umbrella",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Reiseführer",
    "plural": ",-",
    "english": "Travel guide",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Seife",
    "plural": ",-n",
    "english": "Soap",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Sonnenbrille",
    "plural": ",-n",
    "english": "Sunglasses",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Sonnencreme",
    "plural": ",-s",
    "english": "Sunscreen",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Geschirr (Sg.)",
    "plural": "",
    "english": "Dishes/Crockery",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Schlafsack",
    "plural": ",\"-e",
    "english": "Sleeping bag",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Zelt",
    "plural": ",-e",
    "english": "Tent",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Anmeldung",
    "plural": ",-en",
    "english": "Registration",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Ausweis",
    "plural": ",-e",
    "english": "ID/Identity card",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Papiere (Pl.)",
    "plural": "",
    "english": "Papers/Documents",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Pass",
    "plural": ",\"-e",
    "english": "Passport",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Doppelzimmer",
    "plural": ",-",
    "english": "Double room",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Einzelzimmer",
    "plural": ",-",
    "english": "Single room",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Rezeption",
    "plural": ",-en",
    "english": "Reception",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Jugendherberge",
    "plural": ",-n",
    "english": "Youth hostel",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Pension",
    "plural": ",-en",
    "english": "Boarding house/Guesthouse",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Karte",
    "plural": ",-n (Kann ich mit Karte",
    "english": "Card",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Reise",
    "plural": ",-n",
    "english": "Journey/Trip",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Flug",
    "plural": ",\"-e",
    "english": "Flight",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Flughafen",
    "plural": ",\"",
    "english": "Airport",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Bahnsteig",
    "plural": ",-e",
    "english": "Platform",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Gleis",
    "plural": ",-e",
    "english": "Track",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Haltestelle",
    "plural": ",-n",
    "english": "Stop (bus/train)",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Abfahrt",
    "plural": ",-en",
    "english": "Departure",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Ankunft",
    "plural": ",\"-e",
    "english": "Arrival",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Nummer",
    "plural": ",-n",
    "english": "Number",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Ausgang",
    "plural": ",\"-e",
    "english": "Exit",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Platz",
    "plural": ",\"-e (Am Marktplatz steigen",
    "english": "Place/Seat",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Ecke",
    "plural": ",-n",
    "english": "Corner",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Sonne (Sg.)",
    "plural": "",
    "english": "Sun",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Hitze (Sg.)",
    "plural": "",
    "english": "Heat",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Wolke",
    "plural": ",-n",
    "english": "Cloud",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Regen (Sg.)",
    "plural": "",
    "english": "Rain",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Schnee (Sg.)",
    "plural": "",
    "english": "Snow",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Wind",
    "plural": ",-e",
    "english": "Wind",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Wetterbericht",
    "plural": ",-e",
    "english": "Weather report",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Himmelsrichtung",
    "plural": ",-en",
    "english": "Cardinal direction",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Norden (Sg.)",
    "plural": "",
    "english": "North",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Osten (Sg.)",
    "plural": "",
    "english": "East",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Süden (Sg.)",
    "plural": "",
    "english": "South",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Westen (Sg.)",
    "plural": "",
    "english": "West",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Kultur (Sg.)",
    "plural": "",
    "english": "Culture",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Kunst",
    "plural": ",\"-e",
    "english": "Art",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Landschaft",
    "plural": ",-en",
    "english": "Landscape",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "das",
    "german": "Dorf",
    "plural": ",\"-er",
    "english": "Village",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Traum",
    "plural": ",\"-e",
    "english": "Dream",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "die",
    "german": "Tante",
    "plural": ",-n",
    "english": "Aunt",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Vorschlag",
    "plural": ",\"-e",
    "english": "Suggestion",
    "category": "Lektion 12: Urlaub"
  },
  {
    "article": "der",
    "german": "Schuh",
    "plural": ",-e",
    "english": "shoe",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Bluse",
    "plural": ",-n",
    "english": "blouse",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Kleid",
    "plural": ",-er",
    "english": "dress",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Stiefel",
    "plural": ",-",
    "english": "boot",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Tuch",
    "plural": ",-\"er",
    "english": "rag/cloth/scarf",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Mütze",
    "plural": ",-n",
    "english": "cap",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Jeans",
    "plural": "",
    "english": "jeans",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Tasche",
    "plural": ",-n",
    "english": "bag",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Jacke",
    "plural": ",-n",
    "english": "jacket",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Krawatte",
    "plural": ",-n",
    "english": "tie",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Anzug",
    "plural": ",-\"e",
    "english": "suit",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Hemd",
    "plural": ",-en",
    "english": "shirt",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Hose",
    "plural": ",-n",
    "english": "pant",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Rock",
    "plural": ",-\"e",
    "english": "skirt",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Schal",
    "plural": ",-e",
    "english": "shawl",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Kleidung",
    "plural": ",-en",
    "english": "clothes",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "T-Shirt",
    "plural": ",-s",
    "english": "T-Shirt",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Mantel",
    "plural": ",-\"",
    "english": "Coat",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Klamotte",
    "plural": ",-n",
    "english": "clothes",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Uhr",
    "plural": ",-en",
    "english": "clock",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Kasse",
    "plural": ",-n",
    "english": "cashiers",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Kaufhaus",
    "plural": ",-\"er",
    "english": "shopping mall",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Buchladen",
    "plural": ",-\"",
    "english": "bookshop",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Laden",
    "plural": ",-\"",
    "english": "shop",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Schmuck",
    "plural": "",
    "english": "jewelry",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Secondhand-Laden",
    "plural": ",-\"",
    "english": "secondhand shop",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Kleidergeschäft",
    "plural": ",-e",
    "english": "clothes shop",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Shop",
    "plural": ",-s",
    "english": "shop",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Mode",
    "plural": ",-n",
    "english": "fashion",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "tragen",
    "plural": "",
    "english": "to wear, carry",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "shoppen",
    "plural": "",
    "english": "to shop",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "lang",
    "plural": "",
    "english": "long",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "eng",
    "plural": "",
    "english": "tight",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "doof",
    "plural": "",
    "english": "stupid",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "besser",
    "plural": "",
    "english": "better",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "weit",
    "plural": "",
    "english": "far",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "kurz",
    "plural": "",
    "english": "short",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "bequem",
    "plural": "",
    "english": "comfortable",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "auch",
    "plural": "",
    "english": "also",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "viel zu",
    "plural": "",
    "english": "too many",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "so",
    "plural": "",
    "english": "so, thus",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "anprobieren",
    "plural": "",
    "english": "to try sth on",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ankommen, er kommt an, ist angekommen",
    "plural": "",
    "english": "to arrive",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "nerven",
    "plural": "",
    "english": "to irritate",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "kriegen",
    "plural": "",
    "english": "to receive",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "zurückschicken",
    "plural": "",
    "english": "to send back",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "umtauschen",
    "plural": "",
    "english": "to exchange",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "empfehlen, er empfiehlt, hat empfohlen",
    "plural": "",
    "english": "to recommend",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "im Internet bestellen",
    "plural": "",
    "english": "order online",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "entdecken",
    "plural": "",
    "english": "to discover",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "passen",
    "plural": "",
    "english": "to suit, match",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "Was meinst du?",
    "plural": "",
    "english": "What do you think?",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "stehen, er steht, hat gestanden",
    "plural": "",
    "english": "to suit (Der Pullover steht ihr gut)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "anziehen, er zieht an, hat angezogen",
    "plural": "",
    "english": "to wear",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "meinen",
    "plural": "",
    "english": "to mean sth, think sth",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "gefallen, er gefällt, hat gefallen",
    "plural": "",
    "english": "to appeal to someone",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ausziehen, er zieht aus, hat ausgezogen",
    "plural": "",
    "english": "to remove, take sth off",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Produkt",
    "plural": ",-e",
    "english": "product",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Kosmetik",
    "plural": ",-a",
    "english": "cosmetic",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Papier",
    "plural": ",-e",
    "english": "paper",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "USB-Stick",
    "plural": ",-s",
    "english": "USB Stick",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Parfüm",
    "plural": ",-e",
    "english": "perfume",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Duschgel",
    "plural": ",-s",
    "english": "showergel",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Haushalt",
    "plural": ",-e",
    "english": "household",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Untergeschoss",
    "plural": ",-e",
    "english": "basement",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Kamera",
    "plural": ",-s",
    "english": "camera",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Zeitschrift",
    "plural": ",-en",
    "english": "magazine",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Kugelschreiber",
    "plural": ",-",
    "english": "pen",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Bleistift",
    "plural": ",-e",
    "english": "pencil",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "öffnen",
    "plural": "",
    "english": "to open",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "schließen, er schließt, hat geschlossen",
    "plural": "",
    "english": "to close",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "praktisch",
    "plural": "",
    "english": "practical",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "zuhaben",
    "plural": "",
    "english": "to be shut, closed",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Öffnungszeiten",
    "plural": "",
    "english": "opening timings",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "auf sein",
    "plural": "",
    "english": "to be open",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "täglich geöffnet von... bis ....",
    "plural": "",
    "english": "daily open from...till...",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "zu sein",
    "plural": "",
    "english": "to be closed",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ich",
    "plural": "",
    "english": "I",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "du",
    "plural": "",
    "english": "you (informal)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "er/es",
    "plural": "",
    "english": "he/it",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "sie",
    "plural": "",
    "english": "she / they",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "wir",
    "plural": "",
    "english": "we",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ihr",
    "plural": "",
    "english": "you guys (plural informal)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "Sie",
    "plural": "",
    "english": "You (formal)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "mir",
    "plural": "",
    "english": "me (dative)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "dir",
    "plural": "",
    "english": "you (dative)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ihm",
    "plural": "",
    "english": "him/it (dative)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ihr",
    "plural": "",
    "english": "her (dative)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "uns",
    "plural": "",
    "english": "us",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "euch",
    "plural": "",
    "english": "you all",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ihnen",
    "plural": "",
    "english": "them",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "Ihnen",
    "plural": "",
    "english": "You (formal dative)",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "der/die Jugendliche,-n",
    "plural": "",
    "english": "teenager",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Hauptstadt",
    "plural": ",-\"e",
    "english": "main city",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Erfindung",
    "plural": ",-en",
    "english": "invention",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Souvenir",
    "plural": ",-s",
    "english": "souvenir",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Schild",
    "plural": ",-er",
    "english": "plate,sign",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Sache",
    "plural": ",-n",
    "english": "thing",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "das",
    "german": "Design",
    "plural": ",-s",
    "english": "design",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "die",
    "german": "Architektur",
    "plural": "",
    "english": "architecture",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "der",
    "german": "Hof",
    "plural": ",-\"e",
    "english": "courtyard",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ausgehen, er geht aus, ist ausgegangen",
    "plural": "",
    "english": "to go out",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "ohne",
    "plural": "",
    "english": "without",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "aktuell",
    "plural": "",
    "english": "update",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "einfach",
    "plural": "",
    "english": "simply",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "kreativ",
    "plural": "",
    "english": "creative",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "vorgestern",
    "plural": "",
    "english": "day before yesterday",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "auf jeden fall",
    "plural": "",
    "english": "in any case",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "Quatsch!",
    "plural": "",
    "english": "rubbish!",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "böse",
    "plural": "",
    "english": "angry",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "Ich danke Ihnen.",
    "plural": "",
    "english": "I thank you",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  },
  {
    "article": "",
    "german": "gleich",
    "plural": "",
    "english": "same",
    "category": "Lektion 11: Kleidung und mehr - Handwritten Notes"
  }
];
