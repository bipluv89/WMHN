import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Train, Bus, Car, Accessibility, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Parking & Transport',
  description: 'Directions, parking information, and public transport options for West Melbourne Haematology Network.',
};

export default function ParkingTransportPage() {
  return (
    <>
      <PageHeader
        title="Parking & Transport"
        description="How to find us and where to park"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                <MapPin className="h-5 w-5 text-[#7A1F3D]" />
              </div>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2 font-semibold text-gray-900">Address</p>
                <p className="text-gray-600">{siteConfig.contact.address.full}</p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="West Melbourne Haematology Network Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Train className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Public Transport - Train</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Nearest Stations</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>
                      <span className="font-semibold">Southern Cross Station</span> - 10 minute walk
                      <br />
                      All metropolitan lines and V/Line regional services
                    </li>
                    <li>
                      <span className="font-semibold">North Melbourne Station</span> - 15 minute walk
                      <br />
                      Craigieburn, Sunbury, Upfield, and Werribee lines
                    </li>
                    <li>
                      <span className="font-semibold">Flagstaff Station</span> - 12 minute walk
                      <br />
                      City Loop services
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  From Southern Cross Station, exit onto Spencer Street and walk north.
                  Our building is on the right-hand side.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Bus className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Public Transport - Tram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Tram Routes</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <span className="font-semibold">Route 30</span> - St Vincent's Plaza to Docklands
                      <br />
                      Stop 7: Spencer St/Dudley St (50m from our clinic)
                    </li>
                    <li>
                      <span className="font-semibold">Route 35</span> - City Circle (Free Tram)
                      <br />
                      Stop 5: Spencer St/La Trobe St (200m from our clinic)
                    </li>
                    <li>
                      <span className="font-semibold">Route 11</span> - West Preston to Victoria Harbour Docklands
                      <br />
                      Stop 124: La Trobe St/Spencer St (250m from our clinic)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Car className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Driving & Parking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Driving Directions</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <span className="font-semibold">From Eastern Suburbs:</span> Take CityLink or
                      Eastern Freeway, exit at Docklands/West Melbourne, follow signs to Spencer Street
                    </li>
                    <li>
                      <span className="font-semibold">From Western Suburbs:</span> Take West Gate Freeway,
                      exit at Docklands, follow Spencer Street north
                    </li>
                    <li>
                      <span className="font-semibold">From Northern Suburbs:</span> Take Tullamarine Freeway,
                      exit at Flemington Road, turn right onto Spencer Street
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">On-Site Parking</h3>
                  <p className="text-sm text-gray-600">
                    Our building has secure undercover parking available. Access is via the Spencer
                    Street entrance. Patient parking is validated - please bring your parking ticket
                    to reception.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Nearby Parking Options</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <span className="font-semibold">Wilson Parking - Spencer Street</span>
                      <br />
                      180 Spencer Street (100m) - Casual and early bird rates available
                    </li>
                    <li>
                      <span className="font-semibold">Secure Parking - Bourke Street</span>
                      <br />
                      300 Bourke Street (400m) - All day parking
                    </li>
                    <li>
                      <span className="font-semibold">Street Parking</span>
                      <br />
                      Limited metered parking available on Spencer Street and surrounding streets.
                      Check signs carefully for time restrictions.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#7A1F3D]/5 p-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Parking Tip:</span> Parking in the Melbourne CBD
                    can be expensive. We recommend using public transport where possible, or arriving
                    early to take advantage of early bird rates at nearby car parks.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Accessibility className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Building Access</h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Our clinic is fully accessible for patients with mobility needs:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Ground floor entrance with automatic doors</li>
                    <li>• Lift access to Level 3 (our clinic)</li>
                    <li>• Wide corridors and doorways for wheelchair access</li>
                    <li>• Accessible bathroom facilities</li>
                    <li>• Designated disabled parking spaces in building car park</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Assistance</h3>
                  <p className="text-sm text-gray-600">
                    If you require assistance accessing our clinic, please call ahead and our staff
                    will be happy to help. We can arrange to meet you at the building entrance if
                    needed.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Companion Support</h3>
                  <p className="text-sm text-gray-600">
                    You are welcome to bring a support person or carer to your appointment. Our
                    consultation rooms and waiting area have space to accommodate companions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#7A1F3D]">
              <CardHeader>
                <CardTitle>Need Help Finding Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  If you're having trouble finding our clinic or need directions on the day of your
                  appointment, please call us on <span className="font-semibold">{siteConfig.contact.phone}</span> and
                  our reception team will guide you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
