"use client";
import React, { useState } from 'react';
import ProcessTow from '@/components/ProcessTow';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

// All 531 Indian cities
const allIndianCities = [
    'abu', 'adoni', 'agartala', 'agra', 'ahemdabad', 'ahmadabad', 'ahmadnagar', 'ahmedabad', 'aizawl', 'ajmer',
    'akola', 'alappuzha', 'aligarh', 'alipore', 'alipur-duar', 'almora', 'alwar', 'amaravati', 'ambala', 'ambikapur',
    'amer', 'amravati', 'amreli', 'amritsar', 'amroha', 'anantapur', 'anantnag', 'ara', 'arcot', 'asansol',
    'assam', 'aurangabad', 'ayodhya', 'azamgarh', 'badami', 'baharampur', 'bahraich', 'balaghat', 'balangir', 'baleshwar',
    'ballari', 'ballia', 'bally', 'balurghat', 'banda', 'bangalore', 'bankura', 'bara-banki', 'baramula', 'baranagar',
    'barasat', 'barauni', 'bareilly', 'baripada', 'barmer', 'barrackpore', 'barwani', 'basirhat', 'basti', 'batala',
    'beawar', 'begusarai', 'belagavi', 'bengaluru', 'bettiah', 'betul', 'bhadravati', 'bhagalpur', 'bhandara', 'bharatpur',
    'bharhut', 'bharuch', 'bhatpara', 'bhavnagar', 'bhilai', 'bhilwara', 'bhind', 'bhiwani', 'bhojpur', 'bhopal',
    'bhubaneshwar', 'bhubaneswar', 'bhuj', 'bhusawal', 'bid', 'bidar', 'bihar', 'bijnor', 'bikaner', 'bilaspur',
    'bishnupur', 'bithur', 'bodh-gaya', 'bokaro', 'brahmapur', 'budaun', 'budge-budge', 'bulandshahr', 'buldhana', 'bundi',
    'burdwan', 'burhanpur', 'buxar', 'chaibasa', 'chamba', 'chandernagore', 'chandigarh', 'chandragiri', 'chandrapur', 'chapra',
    'chengalpattu', 'chennai', 'cherrapunji', 'chhatarpur', 'chhattisgarh', 'chhindwara', 'chidambaram', 'chikkamagaluru', 'chitradurga', 'chittaurgarh',
    'chittoor', 'churu', 'coimbatore', 'cooch-behar', 'cuddalore', 'cuttack', 'dalhousie', 'daman', 'damoh', 'darbhanga',
    'darjeeling', 'datia', 'daulatabad', 'davangere', 'dehra-dun', 'dehri', 'delhi', 'delhi-ncr', 'deoghar', 'deoria',
    'dewas', 'dhamtari', 'dhanbad', 'dhar', 'dharmapuri', 'dharmshala', 'dhaulpur', 'dhenkanal', 'dhuburi', 'dhule',
    'diamond-harbour', 'dibrugarh', 'dindigul', 'dispur', 'diu', 'doda', 'dowlaiswaram', 'dr-ambedkar-nagar', 'dum-dum', 'dumka',
    'dungarpur', 'durg', 'durgapur', 'dwarka', 'eluru', 'erode', 'etah', 'etawah', 'faizabad', 'faridabad',
    'faridkot', 'farrukhabad-cum-fatehgarh', 'fatehpur', 'fatehpur-sikri', 'firozpur', 'gandhinagar', 'ganganagar', 'gangtok', 'gaya', 'ghaziabad',
    'ghazipur', 'giridih', 'goa', 'godhra', 'gonda', 'gorakhpur', 'gujarat', 'gulmarg', 'guna', 'guntur',
    'gurdaspur', 'gurugram', 'guwahati', 'gwalior', 'gyalshing', 'hajipur', 'halebid', 'halisahar', 'hamirpur', 'hansi',
    'hanumangarh', 'haora', 'hardoi', 'haridwar', 'haryana', 'hassan', 'hathras', 'hazaribag', 'hisar', 'hoshangabad',
    'hoshiarpur', 'hugli', 'hyderabad', 'idukki', 'imphal', 'india', 'indore', 'ingraj-bazar', 'itanagar', 'itarsi',
    'jabalpur', 'jagdalpur', 'jaipur', 'jaisalmer', 'jalandhar', 'jalaun', 'jalgaon', 'jalor', 'jalpaiguri', 'jamalpur',
    'jammu', 'jamnagar', 'jamshedpur', 'jaunpur', 'jhabua', 'jhalawar', 'jhansi', 'jharia', 'jharkhand', 'jhunjhunu',
    'jind', 'jodhpur', 'jorhat', 'junagadh', 'kadapa', 'kaithal', 'kakinada', 'kalaburagi', 'kalimpong', 'kalyan',
    'kamarhati', 'kanchipuram', 'kanchrapara', 'kandla', 'kangra', 'kannauj', 'kanniyakumari', 'kannur', 'kanpur', 'kapurthala',
    'karaikal', 'kargil', 'karimnagar', 'karli', 'karnal', 'karnataka', 'kathua', 'katihar', 'kendujhar', 'kerala',
    'khajuraho', 'khambhat', 'khammam', 'khandwa', 'kharagpur', 'khargone', 'kheda', 'kishangarh', 'kochi', 'kodaikanal',
    'kohima', 'kolar', 'kolhapur', 'kolkata', 'kollam', 'konark', 'koraput', 'kota', 'kottayam', 'kozhikode',
    'krishnanagar', 'kullu', 'kumbakonam', 'kurnool', 'kurukshetra', 'lachung', 'ladakh', 'lakhimpur', 'lalitpur', 'leh',
    'lucknow', 'ludhiana', 'lunglei', 'machilipatnam', 'madgaon', 'madhubani', 'madikeri', 'madurai', 'mahabaleshwar', 'maharashtra',
    'mahbubnagar', 'mahe', 'mahesana', 'maheshwar', 'mainpuri', 'malda', 'malegaon', 'mamallapuram', 'mandi', 'mandla',
    'mandsaur', 'mandya', 'mangalore', 'mangaluru', 'mangan', 'manipur', 'matheran', 'mathura', 'mattancheri', 'meerut',
    'meghalaya', 'merta', 'mhow', 'midnapore', 'mirzapur-vindhyachal', 'mizoram', 'mon', 'moradabad', 'morbi', 'morena',
    'motihari', 'mumbai', 'munger', 'murshidabad', 'murwara', 'mussoorie', 'muzaffarnagar', 'muzaffarpur', 'mysuru', 'nabadwip',
    'nabha', 'nadiad', 'nagaland', 'nagaon', 'nagappattinam', 'nagarjunakonda', 'nagaur', 'nagercoil', 'nagpur', 'nahan',
    'nainital', 'nanded', 'narsimhapur', 'narsinghgarh', 'narwar', 'nashik', 'nathdwara', 'navsari', 'neemuch', 'nellore',
    'new-delhi', 'nizamabad', 'nowgong', 'odisha', 'okha', 'orchha', 'osmanabad', 'palakkad', 'palanpur', 'palashi',
    'palayamkottai', 'pali', 'panaji', 'pandharpur', 'panihati', 'panipat', 'panna', 'paradip', 'parbhani', 'partapgarh',
    'patan', 'patiala', 'patna', 'pehowa', 'phalodi', 'phek', 'phulabani', 'pilibhit', 'pithoragarh', 'porbandar',
    'prayagraj', 'puducherry', 'pudukkottai', 'punch', 'pune', 'punjab', 'puri', 'purnia', 'purulia', 'pusa',
    'pushkar', 'rae-bareli', 'raichur', 'raiganj', 'raipur', 'raisen', 'rajahmundry', 'rajapalayam', 'rajasthan', 'rajgarh',
    'rajkot', 'rajmahal', 'rajnandgaon', 'rajouri', 'ramanathapuram', 'rampur', 'ranchi', 'ratlam', 'ratnagiri', 'rewa',
    'rewari', 'rohtak', 'rupnagar', 'sagar', 'saharanpur', 'saharsa', 'salem', 'samastipur', 'sambalpur', 'sambhal',
    'sangareddi', 'sangli', 'sangrur', 'santipur', 'saraikela', 'sarangpur', 'sasaram', 'satara', 'satna', 'sawai-madhopur',
    'sehore', 'seoni', 'sevagram', 'shahdol', 'shahjahanpur', 'shahpura', 'shajapur', 'shantiniketan', 'sheopur', 'shillong',
    'shimla', 'shivamogga', 'shivpuri', 'shravanabelagola', 'shrir', 'shrirangapattana', 'sick-leave-certificate', 'sikar', 'sikkim', 'silchar',
    'silvassa', 'sirohi', 'sirsa', 'sitamarhi', 'sitapur', 'sivasagar', 'siwan', 'solapur', 'sonipat', 'srikakulam',
    'srinagar', 'sultanpur', 'surat', 'surendranagar', 'tamil-nadu', 'tehri', 'telangana', 'tezpur', 'thalassery', 'thane',
    'thanjavur', 'thiruvananthapuram', 'thoothukudi', 'thrissur', 'tinsukia', 'tiruchchirappalli', 'tirunelveli', 'tirupati', 'tiruppur', 'tonk',
    'tripura', 'tumakuru', 'udaipur', 'udayagiri', 'udhagamandalam', 'udhampur', 'ujjain', 'ulhasnagar', 'una', 'uttar-pradesh',
    'uttarakhand', 'vadodara', 'valsad', 'varanasi', 'vasai-virar', 'vatakara', 'vellore', 'veraval', 'vidisha', 'vijayapura',
    'vijayawada', 'visakhapatnam', 'vizianagaram', 'warangal', 'wardha', 'west-bengal', 'wokha', 'yanam', 'yavatmal', 'yemmiganur',
    'zunheboto'
];

// USA cities (all 29)
const usaCities = [
    'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia',
    'san-antonio', 'san-diego', 'dallas', 'san-jose', 'austin', 'jacksonville',
    'fort-worth', 'columbus', 'charlotte', 'san-francisco', 'indianapolis',
    'seattle', 'denver', 'boston', 'el-paso', 'nashville', 'detroit', 'portland',
    'las-vegas', 'memphis', 'louisville', 'baltimore', 'milwaukee', 'albuquerque'
];

// International cities (24+)
const internationalCities = [
    'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide',
    'toronto', 'vancouver', 'montreal', 'calgary', 'ottawa',
    'london', 'manchester', 'birmingham', 'leeds', 'glasgow',
    'berlin', 'munich', 'frankfurt', 'hamburg', 'cologne',
    'dublin', 'cork', 'galway', 'limerick',
    'singapore',
    'dubai', 'abu-dhabi', 'sharjah',
    'manila', 'quezon-city', 'davao', 'cebu'
];

// Indian states (30)
const indianStates = [
    'andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh',
    'goa', 'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka',
    'kerala', 'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya',
    'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim',
    'tamil-nadu', 'telangana', 'tripura', 'uttarakhand', 'uttar-pradesh',
    'west-bengal', 'delhi', 'jammu-and-kashmir', 'ladakh'
];

function capitalizeWords(text: string) {
    return text.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
}

export default function StatesCitiesContent() {
    const [expandMedicalIndia, setExpandMedicalIndia] = useState(false);
    const [expandMedicalUSA, setExpandMedicalUSA] = useState(false);
    const [expandMedicalIntl, setExpandMedicalIntl] = useState(false);
    const [expandSickLeaveIndia, setExpandSickLeaveIndia] = useState(false);

    return (
        <React.Fragment>
            <style dangerouslySetInnerHTML={{__html: `
                .strict-alignment-box {
                    text-align: left !important;
                }
                .strict-alignment-box h5,
                .strict-alignment-box p {
                    text-align: left !important;
                    width: 100% !important;
                    display: block !important;
                }
            `}} />
            {/* Hero Section */}
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h1 className="mb-3">Get Medical Certificates Online – Across India and Worldwide</h1>
                            <p className="lead">
                                PulseQuik provides legitimate, doctor-verified medical certificates for all Indian cities, USA cities, and international locations that also online from anywhere. Be it a fitness certificate, sick leave certificate, recovery certificate, or fit-to-travel certificate, our online platform connects you to authorized doctors who can provide you with valid digital certificates within minutes.
                            </p>
                            <p>
                                We are proud to provide services to individuals, workers, and organizations in all Indian cities — and internationally in the USA, China, Germany, Australia, Singapore, Dubai, Canada, and the UK.
                            </p>
                            <p>
                                Our procedure is 100% online — no hospital trips, no long waits. Just fill out your details, talk to a verified doctor through video call, and get your certificate safely in your inbox.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form 1A Certificate Section */}
            <section className="pq-90">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="mb-4">📋 Online Form 1A Fitness Certificate</h2>
                            <p className="mb-4">Official Form 1A medical fitness certificates for driving license applications – available for all Indian states.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-primary mb-3">All Indian States & Union Territories</h4>
                            <div className="row">
                                {indianStates.map((state) => (
                                    <div className="col-md-6 col-lg-4 col-xl-3 mb-2" key={'form1a-' + state}>
                                        <Link href={`/online-form-1a-fitness-certificate-in-${state}/`} className="pq-button pq-button-link">
                                            Form 1A Certificate in {capitalizeWords(state)}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sick Leave Certificate Section */}
            <section className="pq-90 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="mb-4">🏥 Online Medical Sick Leave Certificate</h2>
                            <p className="mb-4">Doctor-certified sick leave certificates for work and school absences – available across India.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-primary mb-3 d-flex justify-content-between align-items-center">
                                <span>India – Cities Available</span>
                                <button onClick={() => setExpandSickLeaveIndia(!expandSickLeaveIndia)} className="btn btn-sm btn-outline-primary">
                                    {expandSickLeaveIndia ? 'Hide' : 'See All'} Cities
                                </button>
                            </h4>
                            <div className="row">
                                {allIndianCities.map((city, index) => (
                                    <div
                                        className="col-md-6 col-lg-4 col-xl-3 mb-2"
                                        key={'sick-' + city}
                                        style={{ display: (expandSickLeaveIndia || index < 10) ? 'block' : 'none' }}
                                    >
                                        <Link href={`/online-medical-sick-leave-certificate-in-${city}/`} className="pq-button pq-button-link">
                                            Online Sick Leave Certificate in {capitalizeWords(city)}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Medical Certificate Section */}
            <section className="pq-90">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="mb-4">🏥 Online Medical Certificate</h2>
                            <p className="mb-4">Quick medical certificates for work, travel, school, and general health needs – available in major Indian cities.</p>
                        </div>
                    </div>

                    {/* India Cities - Collapsible */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h4 className="text-primary mb-3 d-flex justify-content-between align-items-center">
                                <span>India – Cities Available</span>
                                <button onClick={() => setExpandMedicalIndia(!expandMedicalIndia)} className="btn btn-sm btn-outline-primary">
                                    {expandMedicalIndia ? 'Hide' : 'See All'} Cities
                                </button>
                            </h4>
                            <div className="row">
                                {allIndianCities.map((city, index) => (
                                    <div
                                        className="col-md-6 col-lg-4 col-xl-3 mb-2"
                                        key={city}
                                        style={{ display: (expandMedicalIndia || index < 10) ? 'block' : 'none' }}
                                    >
                                        <Link href={`/online-medical-certificate-in-${city}/`} className="pq-button pq-button-link">
                                            Online Medical Certificate in {capitalizeWords(city)}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* USA Cities - Collapsible */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h4 className="text-primary mb-3 d-flex justify-content-between align-items-center">
                                <span>USA – Cities Available</span>
                                <button onClick={() => setExpandMedicalUSA(!expandMedicalUSA)} className="btn btn-sm btn-outline-primary">
                                    {expandMedicalUSA ? 'Hide' : 'See All'} Cities
                                </button>
                            </h4>
                            <div className="row">
                                {usaCities.map((city, index) => (
                                    <div
                                        className="col-md-6 col-lg-4 col-xl-3 mb-2"
                                        key={city}
                                        style={{ display: (expandMedicalUSA || index < 10) ? 'block' : 'none' }}
                                    >
                                        <Link href={`/online-medical-certificate-in-usa-${city}/`} className="pq-button pq-button-link">
                                            Online Medical Certificate in {capitalizeWords(city)}, USA
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* International Cities - Collapsible */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h4 className="text-primary mb-3 d-flex justify-content-between align-items-center">
                                <span>International – Cities Available</span>
                                <button onClick={() => setExpandMedicalIntl(!expandMedicalIntl)} className="btn btn-sm btn-outline-primary">
                                    {expandMedicalIntl ? 'Hide' : 'See All'} Cities
                                </button>
                            </h4>
                            <div className="row">
                                {internationalCities.map((city, index) => (
                                    <div
                                        className="col-md-6 col-lg-4 col-xl-3 mb-2"
                                        key={city}
                                        style={{ display: (expandMedicalIntl || index < 10) ? 'block' : 'none' }}
                                    >
                                        <Link href={`/online-international-medical-certificate-in-${city}/`} className="pq-button pq-button-link">
                                            Online Medical Certificate in {capitalizeWords(city)}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Certificates */}
            <section className="pq-90 bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h2 className="mb-4">📄 Other Available Certificates</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="p-4 shadow-sm bg-white rounded border-0 text-start h-100 d-flex flex-column align-items-start strict-alignment-box">
                                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'left', width: '100%', fontFamily: 'var(--title-fonts)', color: 'var(--dark-color)' }}>Medical Fitness Certificate</div>
                                <div style={{ textAlign: 'left', width: '100%', marginBottom: '15px', color: 'var(--secondary-color)' }}>For gym membership, sports, and fitness activities.</div>
                                <Link href="/medical-fitness-certificate/" className="pq-button pq-button-flat">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="p-4 shadow-sm bg-white rounded border-0 text-start h-100 d-flex flex-column align-items-start strict-alignment-box">
                                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'left', width: '100%', fontFamily: 'var(--title-fonts)', color: 'var(--dark-color)' }}>CARA Fitness Certificate</div>
                                <div style={{ textAlign: 'left', width: '100%', marginBottom: '15px', color: 'var(--secondary-color)' }}>For commercial vehicle drivers and Heavy Goods Vehicle operations.</div>
                                <Link href="/cara-fitness-certificate/" className="pq-button pq-button-flat">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="p-4 shadow-sm bg-white rounded border-0 text-start h-100 d-flex flex-column align-items-start strict-alignment-box">
                                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'left', width: '100%', fontFamily: 'var(--title-fonts)', color: 'var(--dark-color)' }}>Recovery Certificate</div>
                                <div style={{ textAlign: 'left', width: '100%', marginBottom: '15px', color: 'var(--secondary-color)' }}>Post-treatment medical clearance and recovery documentation.</div>
                                <Link href="/recovery-certificate/" className="pq-button pq-button-flat">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="p-4 shadow-sm bg-white rounded border-0 text-start h-100 d-flex flex-column align-items-start strict-alignment-box">
                                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'left', width: '100%', fontFamily: 'var(--title-fonts)', color: 'var(--dark-color)' }}>Caretaker Certificate</div>
                                <div style={{ textAlign: 'left', width: '100%', marginBottom: '15px', color: 'var(--secondary-color)' }}>For leave to care for family members or dependents.</div>
                                <Link href="/caretaker-certificate/" className="pq-button pq-button-flat">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="p-4 shadow-sm bg-white rounded border-0 text-start h-100 d-flex flex-column align-items-start strict-alignment-box">
                                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'left', width: '100%', fontFamily: 'var(--title-fonts)', color: 'var(--dark-color)' }}>Work From Home Certificate</div>
                                <div style={{ textAlign: 'left', width: '100%', marginBottom: '15px', color: 'var(--secondary-color)' }}>Medical justification for remote work arrangements.</div>
                                <Link href="/work-from-home-certificate/" className="pq-button pq-button-flat">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="p-4 shadow-sm bg-white rounded border-0 text-start h-100 d-flex flex-column align-items-start strict-alignment-box">
                                <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'left', width: '100%', fontFamily: 'var(--title-fonts)', color: 'var(--dark-color)' }}>Unfit to Travel Certificate</div>
                                <div style={{ textAlign: 'left', width: '100%', marginBottom: '15px', color: 'var(--secondary-color)' }}>Medical documentation for travel delays or cancellations.</div>
                                <Link href="/unfit-to-travel-certificate/" className="pq-button pq-button-flat">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProcessTow />
            <FAQ />
        </React.Fragment>
    );
}
