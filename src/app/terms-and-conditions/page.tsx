
import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetadata } from '@/lib/meta-data';
import { getBreadcrumbItems } from '@/lib/breadcrumb';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = getMetadata('/terms-and-conditions') || {
    title: 'Terms of Service - PulseQuik',
    description: 'Read the terms and conditions for using PulseQuik services.'
};

export default function TermsAndConditions() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'fas fa-home' },
        ...getBreadcrumbItems('terms-and-conditions').map((item, index, arr) => ({
            ...item,
            active: index === arr.length - 1
        }))
    ];

    return (
        <main>
            <BreadcrumbSchema items={breadcrumbItems} />
            <Breadcrumb
                pageName="Terms and Conditions"
                breadcrumbItems={breadcrumbItems}
            />
            <section className="pq-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="text-container pb-2">
                                <h2 className="">Terms and Conditions</h2>
                            </div>
                        </div>
                        <p><span>Terms of use</span></p>
                        <p>
                            This website (Site) is operated by Vamshi Cure Private Limited
                            (we, our or us). It is available at: https://pulsequik.com/ and may be available through other
                            addresses or channels.
                        </p>
                        <p><span>Services</span></p>
                        <p>Pulsequik is a platform (or a facilitating agency) that connects patients with doctor partners
                            through a technology platform that assists doctor partners to manage their independent practices.
                            Certificates to minors require the consent of the guardian and no certificate is issued without their approval.
                        </p>
                        <p>Pulsequik provides no assurance that a telehealth consultation is appropriate for your circumstances
                            and does not provide any medical or health advice or services to you. Pulsequik shall not be held
                            liable/responsible for non-issuance of Medical Certificate by the Registered Medical Practitioner or
                            any consequential situations arising out after issuance of Medical Certificate. You agree that the
                            acceptance/denial of the Medical Certificate issued for all practical purposes is not within the
                            realms of liability of Pulsequik. You agree that Pulsequik is merely a facilitating agency and has
                            no direct involvement/role in the issuance of medical certificates and issuance of Medical Certificates.
                        </p>
                        <p>
                            We reserve the right to cancel or suspend your access to your subscription/service without notice and at our sole discretion.
                        </p>
                        <p>Priority orders are serviced within 40 mins* within working hours, where the customer shares all
                            their details, and attends the Doctor consultation. Handwritten medical notes are
                            issued by the Doctor. The seal and the sign may be digitally printed based on the discretion of the
                            Doctor.
                        </p>

                        <p><span>Your Responsibilities</span></p>
                        <p>You agree to provide all information requested by us, Partner Doctors and Partner Providers and
                            warrant that all information which you provide is true and fully complete.
                        </p>
                        <p>If you do not understand any question asked in our questionnaire (on the Platform) or any advice
                            given by a Partner Doctor and/or Partner Provider, you should seek clarification immediately.
                        </p>

                        <p><span>Consent</span></p>
                        <p>By accessing and/or using our Site, you agree to these terms of use and our Privacy Policy (available
                            on our site). (Terms). Please read these Terms carefully and immediately cease using our Site if you
                            do not agree to them.
                        </p>

                        <p><span>Variations</span></p>
                        <p>We may, at any time and at our discretion, vary these Terms by publishing the varied terms on our
                            Site. We recommend you check our Site regularly to ensure you are aware of our current terms.
                            Materials and information on this Site (Content) are subject to change without notice. We do not
                            undertake to keep our Site up-to-date and we are not liable if any Content is inaccurate or
                            out-of-date.
                        </p>

                        <p><span>License to use our Site</span></p>
                        <p>We grant you a non-exclusive, royalty-free, revocable, worldwide, non-transferable license to use our
                            Site in accordance with these Terms. All other uses are prohibited without our prior written
                            consent.
                        </p>

                        <p><span>Conduct</span></p>
                        <p>You must not do or attempt to do anything: that is unlawful; prohibited by any laws applicable to our
                            Site; which we would consider inappropriate; or which might bring us or our Site into disrepute,
                            including (without limitation):
                        </p>

                        <ul className="custom-list">
                            <li>Anything that would constitute a breach of an individual's privacy (including uploading private
                                or personal information without an individual's consent) or any other legal rights.
                            </li>
                            <li>Using our Site to defame, harass, threaten, menace or offend any person.</li>
                            <li>Interfering with any user using our Site.</li>
                            <li>Tampering with or modifying our Site, knowingly transmitting viruses or other disabling
                                features, or damaging or interfering with our Site, including (without limitation) using trojan
                                horses, viruses or piracy or programming routines that may damage or interfere with our Site.
                            </li>
                            <li>Using our Site to send unsolicited email messages.</li>
                            <li>Facilitating or assisting a third party to do any of the above acts.</li>
                        </ul>

                        <p><span>Exclusion of competitors</span></p>
                        <p>You are prohibited from using our Site, including the Content, in any way that competes with our business.</p>

                        <p><span>Refunds</span></p>
                        <p>The customer/client is not entitled to any refund on the ground that the Registered Medical
                            Practitioner does not issue a medical certificate on his subjective satisfaction, if otherwise, the
                            consultation with the Registered Medical Practitioner is undergone successfully.
                        </p>

                        <p><span>Information</span></p>
                        <p>The Content is not comprehensive and is for general information purposes only. It does not take into
                            account your specific needs, objectives or circumstances, and it is not advice. While we use
                            reasonable attempts to ensure the accuracy and completeness of the Content, we make no
                            representation or warranty in relation to it, to the maximum extent permitted by law. A fitness
                            certificate is valid for one month from the date of issue and all types of sick certificates are
                            valid for the duration mentioned in the certificate. No changes can be made to a medical certificate
                            once the document is issued.
                        </p>

                        <p><span>Intellectual Property rights</span></p>
                        <p>Unless otherwise indicated, we own or license all rights, title and interest (including intellectual
                            property rights) in our Site and all of the Content. Your use of our Site and your use of and access
                            to any Content does not grant or transfer to you any rights, title or interest in relation to our
                            Site or the Content. You must not:
                        </p>

                        <ul className="custom-list">
                            <li>Copy or use, in whole or in part, any Content</li>
                            <li>
                                Reproduce, retransmit, distribute, disseminate, sell, publish, broadcast or circulate any Content to any third party
                            </li>
                            <li>Breach any intellectual property rights connected with our Site or the Content, including
                                (without limitation) altering or modifying any of the Content, causing any of the Content to be
                                framed or embedded in another website or platform, or creating derivative works from the Content.
                            </li>
                        </ul>

                        <p><span>User Content</span></p>
                        <p>You may be permitted to post, upload, publish, submit or transmit relevant information and content
                            (User Content) on our Site. By making available any User Content on or through our Site, you grant
                            to us a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license to use
                            the User Content, with the right to use, view, copy, adapt, modify, distribute, license, sell,
                            transfer, communicate, publicly display, publicly perform, transmit, stream, broadcast, access, or
                            otherwise exploit such User Content on, through or by means of our Site.
                        </p>
                        <p>You agree that you are solely responsible for all User Content that you make available on or through
                            our Site. You represent and warrant that:
                        </p>
                        <ul className="custom-list">
                            <li>You are either the sole and exclusive owner of all User Content or you have all rights,
                                licenses, consents and releases that are necessary to grant to us the rights in such User
                                Content (as contemplated by these Terms)
                            </li>
                            <li>Neither the User Content nor the posting, uploading, publication, submission or transmission of
                                the User Content or our use of the User Content on, through or by means of our Site will
                                infringe, misappropriate or violate a third party’s intellectual property rights, or rights of
                                publicity or privacy, or result in the violation of any applicable law or regulation.
                            </li>
                        </ul>
                        <p>We do not endorse or approve and are not responsible for any User Content. We may, at any time (at
                            our sole discretion), remove any User Content.
                        </p>
                        <p><span>Third-party sites</span></p>
                        <p>Our Site may contain links to websites operated by third parties. Unless expressly stated otherwise,
                            we do not control, endorse or approve, and are not responsible for, the content on those websites.
                            You should make your own investigations with respect to the suitability of those websites.
                        </p>
                        <p><span>Discontinuance</span></p>
                        <p>We may, at any time and without notice to you, discontinue our Site, in whole or in part. We may also
                            exclude any person from using our Site, at any time and at our sole discretion. We are not
                            responsible for any Liability you may suffer arising from or in connection with any such
                            discontinuance or exclusion.
                        </p>
                        <p><span>Warranties and disclaimers</span></p>
                        <p>To the maximum extent permitted by law, we make no representations or warranties about our Site or
                            the Content, including (without limitation) that:
                        </p>
                        <ul className="custom-list">
                            <li>They are complete, accurate, reliable, up-to-date, and suitable for any particular purpose.</li>
                            <li>Access will be uninterrupted, error-free or free from viruses.</li>
                            <li>Our Site will be secure.</li>
                        </ul>
                        <p>You read, use and act on our Site and the Content at your own risk.</p>
                        <p><span>Limitation of liability</span></p>
                        <p>Vamshi Cure Private Limited shall not be liable/responsible for acceptance/denial or adverse response
                            by any authority/entity/employer/agency, to the medical certificate issued by the Registered Medical
                            Practitioner and it shall be the sole discretion/liability of the Registered Medical Practitioner in
                            the matters relating to the issuance of Medical Certificate.
                        </p>
                        <p>To the maximum extent permitted by law, we are not responsible for any loss, damage or expense,
                            howsoever arising, whether direct or indirect and/or whether present, unascertained, future or
                            contingent (Liability) suffered by you or any third party, arising from or in connection with your
                            use of our Site and/or the Content and/or any inaccessibility of, interruption to or outage of our
                            Site and/or any loss or corruption of data and/or the fact that the Content is incorrect, incomplete
                            or out-of-date.
                        </p>
                        <p><span>Indemnity</span></p>
                        <p>To the maximum extent permitted by law, you must indemnify us, and hold us harmless, against any
                            Liability suffered or incurred by us arising from or in connection with your use of our Site or any
                            breach of these Terms or any applicable laws by you. This indemnity is a continuing obligation,
                            independent from the other obligations under these Terms, and continues after these Terms end. It is
                            not necessary for us to suffer or incur any Liability before enforcing a right of indemnity under
                            these Terms.
                        </p>
                        <p>Termination</p>
                        <p>These Terms are effective until terminated by us, which we may do at any time and without notice to
                            you. In the event of termination, all restrictions imposed on you by these Terms and limitations of
                            liability set out in these Terms will survive.
                        </p>
                        <p>Disputes</p>
                        <p>In the event of any dispute arising from, or in connection with, these Terms (Dispute), the party
                            claiming there is a Dispute must give written notice to the other party setting out the details of
                            the Dispute and proposing a resolution. Within 15 days after receiving the notice, the parties must,
                            by their senior executives or senior managers (who have the authority to reach a resolution on
                            behalf of the party), meet at least once to attempt to resolve the Dispute or agree on the method of
                            resolving the Dispute by other means, in good faith. All aspects of every such conference, except
                            the fact of the occurrence of the conference, will be privileged. If the parties do not resolve the
                            Dispute, or (if the Dispute is not resolved) agree on an alternate method to resolve the Dispute,
                            within 30 days after receipt of the notice, the Dispute may be referred by either party (by notice
                            in writing to the other party) to litigation in courts in the State of MadhyaPradesh only.
                        </p>

                        <p><span>Severance</span></p>
                        <p>If a provision of these Terms is held to be void, invalid, illegal or unenforceable, that provision
                            must be read down as narrowly as necessary to allow it to be valid or enforceable. If it is not
                            possible to read down a provision (in whole or in part), that provision (or that part of that
                            provision) is severed from these Terms without affecting the validity or enforceability of the
                            remainder of that provision or the other provisions in these Terms.
                        </p>
                        <p><span>Jurisdiction</span></p>
                        <p>Your use of our Site and these Terms are governed by Indian laws and all its states and territories.
                            You irrevocably and unconditionally submit to the exclusive jurisdiction of the courts operating in
                            MadhyaPradesh (India) and any courts entitled to hear appeals from those courts and waive any right
                            to object to proceedings being brought in those courts.
                        </p>
                        <p>Our Site may be accessed throughout India and overseas. We make no representation that our Site
                            complies with the laws (including intellectual property laws) of any country outside India. If you
                            access our Site from outside India, you do so at your own risk and are responsible for complying
                            with the laws of the jurisdiction where you access our Site.
                        </p>
                        <p className="pq-mb-100">Email - legal@pulsequik.com</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
