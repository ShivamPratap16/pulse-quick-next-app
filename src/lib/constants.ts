
// URL Constants
export const MEDICAL_URL = process.env.NEXT_PUBLIC_MEDICAL_CERTIFICATE || "https://pulsequik.com/medical-certificate";
export const FORM1A_URL = process.env.NEXT_PUBLIC_FORM_1A_CERTIFICATE || "";
export const CARA_FORM_URL = process.env.NEXT_PUBLIC_CARA_FORM_URL || "";
export const DOCTOR_CONSULTATION_URL = process.env.NEXT_PUBLIC_DOCTOR_CONSULTATION || "";
export const INTL_URL = process.env.NEXT_PUBLIC_INTL_CERTIFICATE || "";
export const INTL_PAGE_ROUTE = "/international-medical-certificate";
export const CAREER_URL = process.env.NEXT_PUBLIC_CAREER_FORM || "";

export const indianCities = [
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

export const usaCities = [
  'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia',
  'san-antonio', 'san-diego', 'dallas', 'san-jose', 'austin', 'jacksonville',
  'fort-worth', 'columbus', 'charlotte', 'san-francisco', 'indianapolis',
  'seattle', 'denver', 'boston', 'el-paso', 'nashville', 'detroit', 'portland',
  'las-vegas', 'memphis', 'louisville', 'baltimore', 'milwaukee', 'albuquerque'
];

export const internationalCities = [
  'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide',
  'toronto', 'vancouver', 'montreal', 'calgary', 'ottawa',
  'london', 'manchester', 'birmingham', 'leeds', 'glasgow',
  'berlin', 'munich', 'frankfurt', 'hamburg', 'cologne',
  'dublin', 'cork', 'galway', 'limerick',
  'singapore',
  'dubai', 'abu-dhabi', 'sharjah',
  'manila', 'quezon-city', 'davao', 'cebu'
];

export const indianStates = [
  'andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh',
  'goa', 'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka',
  'kerala', 'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya',
  'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim',
  'tamil-nadu', 'telangana', 'tripura', 'uttarakhand', 'uttar-pradesh',
  'west-bengal', 'delhi', 'jammu-and-kashmir', 'ladakh'
];
