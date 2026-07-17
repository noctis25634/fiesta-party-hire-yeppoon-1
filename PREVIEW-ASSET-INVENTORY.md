# Accurate planner preview inventory

The planner has two deliberately separate visual systems:

1. **Live scene:** a layered CSS composition generated only from the current
   event, setting, colours, items and quantities.
2. **Inspiration reference:** one real Fiesta photograph selected from the
   reviewed asset library and clearly labelled as inspiration, never an exact
   design preview.

The reusable configuration for every item is exposed as
`window.fiestaAccuratePlanner.itemConfig` in `planner.js`. Each record contains
a stable ID, display label, category, visual family, layer, scene zone,
reference asset when available, visual dimensions, quantity rules, compatible
events and themes, preview caption, and enquiry wording.

## Items with a reviewed photo reference

These items use a CSS representation in the live scene and may show the listed
real photograph in the separate inspiration card.

| Selection | Inspiration reference |
| --- | --- |
| Background Lights | `assets/addons/lit-marquee.webp` |
| Festoon / String Lights | `assets/addons/lit-marquee.webp` |
| Formal Table Setup | `assets/addons/formal-table-setting.webp` |
| Round Table Setup | `assets/addons/formal-table-setting.webp` |
| Chair Bow Table Setup | `assets/addons/formal-table-setting.webp` |
| Marquee Table Setup | `assets/addons/marquee-table-chair-setup.webp` |
| Cocktail Table | `assets/addons/cocktail-table.webp` |
| Chafing Dishes | `assets/addons/chafing-dishes.webp` |
| Lit Marquee Setup | `assets/addons/lit-marquee.webp` |
| Folding Table | `assets/addons/folding-table.webp` |
| Long Folding Table | `assets/addons/folding-table-long.webp` |
| White Plastic Chair | `assets/addons/white-plastic-chair.webp` |
| Plates and Cutlery | `assets/addons/plates-cutlery.webp` |
| LOVE Sign | `assets/addons/love-sign.webp` |
| Wedding Arbour | `assets/addons/wedding-arbour.webp` |
| Kids Colourful Chairs | `assets/addons/kids-colourful-chairs.webp` |
| Bubble Machine | `assets/addons/bubble-machine.webp` |
| Portable Speaker & Microphone | `assets/addons/portable-speaker-microphone.webp` |
| Speaker & Microphones | `assets/addons/speaker-microphones.webp` |
| Party Light | `assets/addons/party-light.webp` |

## CSS-rendered live representations

The following selections do not have a verified isolated product photograph
that can be placed accurately inside a spatial scene. They therefore use a
purpose-built CSS representation and are not substituted with an unrelated
gallery image:

- Arch Backdrop
- Artificial Grass Backdrop
- Neon Light
- Balloon Styling
- Artificial Flowers
- Extra Grass Decorations
- Additional Balloon Styling
- Personalised Fabric Napkins
- Round Frame Arch
- Colourful Chair Ribbons
- Candle Holders
- Candle Lights
- Champagne Glasses
- Water Glasses
- Greenery Decorations
- Flower Arrangements
- Cake Stand
- Outdoor Table Setup

CSS representations are also used for items that do have a reference photo.
This keeps the live scene layered, consistently scaled and colour-responsive;
the real photograph remains available beside it for product or event context.

## Quantity behaviour

- Exact quantities always appear in the live-scene item key, request summary,
  saved draft and enquiry message.
- Small quantities are drawn directly where practical.
- Large quantities use a representative visual group to keep the scene legible:
  up to 6 tables, 12 chairs, and 12 tabletop pieces.
- The exact total remains visible beside the representative group, for example
  `White plastic chair ×80`.

## Event-specific layouts

Separate layout profiles are included for Birthday, Baby Shower, Bridal Shower,
Wedding, Corporate, Christmas/Seasonal, Outdoor Celebration, Formal Dinner and
Children's Party. Additional profiles cover Engagement, Graduation,
Christening and Custom Event.
