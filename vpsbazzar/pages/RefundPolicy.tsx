
import React from 'react';
import { siteConfig } from '../siteConfig';

export const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#050505] py-24 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 animate-reveal text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter transition-colors">
            Refund <span className="text-[#C0392B]">Matrix.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">
            VPSBazzar Data Centre Pvt Ltd • Policy Status: 2024.1 • Official Protocol
          </p>
        </div>

        <div className="bg-white dark:bg-[#0a0a0b] p-8 md:p-16 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-2xl transition-all">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm lg:text-base">
            
            <div className="pb-8 border-b border-slate-100 dark:border-white/5">
              <p className="font-bold text-slate-900 dark:text-white border-l-4 border-[#C0392B] pl-4 italic">
                Vpsbazzar Data Centre Pvt Ltd (“VPSBAZZAR”, “we”, “our”) provides cloud platform and configuration services, including but not limited to smart dedicated servers, graphics processing units, object storage, content delivery network service and continuous data protection backup services (“Services”) to its customers (“Customer(s)”, “you”, “your”).
              </p>
              <p className="mt-4">
                Use of the Services by the Customers shall be governed by online terms of service or a master services agreement, if any, executed between VPSBAZZAR and the Customer. This refund policy (“Policy”) describes the cases in which a refund may be due to the Customer and sets out the terms governing such refund. Your use of the Services or your registration with us for availing the Services, constitutes your agreement to this Policy. VPSBAZZAR may modify this Policy at any time by posting a revised version on our website and the amended version shall become automatically binding.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 tracking-tight transition-colors">
                <span className="text-[#C0392B]">❖</span> Refund Scenarios
              </h2>
              
              <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5 space-y-4">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">1. Refund for Invoice Discrepancies</h3>
                <p>If you find any discrepancies in our invoices with respect to usage metrics or the Services subscribed by you and/or other details mentioned on the invoice like GSTIN etc., you are required to email us at <span className="text-[#C0392B] font-bold">billing-support@Vpsbazzarnetworks.com</span> within 7 (Seven) days of first receipt of Invoice on email id (s) registered with us (“Invoice Email”).</p>
                <p>We will verify the validity of the alleged discrepancies internally and after verifying whether any refund is due, we may at our discretion, offer you a credit note or infra credits and/or refund the proportionate amount, wherever required. If you do not inform us of any discrepancy within 7 (Seven) days, we will not entertain any requests to modify bills or offer refunds.</p>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5 space-y-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">2. Refund in case of Deprovisioning of Services</h3>
                <p>All Services shall be presumed to be in an active state and shall be billed till the date of de-provisioning. The Customer is required to follow the below process:</p>
                
                <div className="ml-4 space-y-4">
                  <div className="p-4 bg-white dark:bg-black rounded-xl border border-slate-200 dark:border-white/5">
                    <p><strong>Services via Self Service Portal:</strong> These can be de-provisioned via the portal at <span className="text-[#C0392B]">https://vpsbazzar.com</span>. Follow the steps mentioned in our help articles.</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-black rounded-xl border border-slate-200 dark:border-white/5">
                    <p><strong>Services Provisioned Manually:</strong> You must explicitly file a request by sending an email to <span className="text-[#C0392B] font-bold">cloud-platform@Vpsbazzarnetworks.com</span> specifying the date of de-provisioning. This must be sent via your authorized technical contact.</p>
                  </div>
                </div>

                <p>On receiving your request, our team will send a “De-provisioning Email”. We will cease billing from the effective date mentioned therein. If our finance team inadvertently misses accounting for this, we shall rectify it by issuing a credit note or infra credits upon your notification to <span className="text-[#C0392B] font-bold">accounts@vpsbazzar.com</span>.</p>
                <p><strong>Effective Date:</strong> Usually the date in the De-provisioning Email, unless the service had a commitment period, in which case it is the last day of such commitment. You remain liable to pay for all services until they are de-provisioned.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">3. Software Licenses</h3>
                  <p>Software licenses are billed for each calendar month regardless of the period of usage. Once used during a month, it is NOT eligible for a refund. Refund of unused future months is possible via email to <span className="text-[#C0392B] font-bold">support@vpsbazzar.com</span>.</p>
                </div>
                <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">4. Prepaid Infra Credits</h3>
                  <p>Unused credits can be refunded if the account is not in an “Inactive/dormant state” (no consumption in 90 days). No refund is due after 90 days of inactivity and we reserve the right to invalidate such credits.</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">5. TDS Refund</h3>
                <p>To claim a TDS refund, please refer to our Knowledgebase article: <strong>‘TDS Refund- How to claim TDS refunds? – Vpsbazzar Data Centre Knowledgebase’</strong> for the official process.</p>
              </div>
            </section>

            <section className="space-y-6 pt-10 border-t border-slate-100 dark:border-white/5">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 tracking-tight transition-colors">
                <span className="text-[#C0392B]">❖</span> No Entitlement Cases
              </h2>
              <p className="font-bold">You shall not be entitled to any refund in the following cases:</p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Minimum Billing Committed Nodes", desc: "Launched for specific fixed periods." },
                  { label: "Promotional/Free Coupons", desc: "Credits from codes are not refunded." },
                  { label: "Payment Gateway Fees", desc: "Third-party transaction fees are retained." },
                  { label: "Linked Accounts with Dues", desc: "Refunds are adjusted against outstanding dues." },
                  { label: "TOS Policy Violations", desc: "Suspected violations disentitle refunds." },
                  { label: "Discretionary Denial", desc: "Other cases as per VPSBAZZAR discretion." }
                ].map((item, i) => (
                  <li key={i} className="p-5 rounded-2xl border border-red-500/10 dark:border-red-900/20 bg-red-500/5 transition-all">
                    <p className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6 pt-10 border-t border-slate-100 dark:border-white/5">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 tracking-tight transition-colors">
                <span className="text-[#C0392B]">❖</span> General Terms
              </h2>
              <div className="bg-slate-900 text-slate-300 p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                <p className="mb-4">All requests for refund shall be sent to <span className="text-[#C0392B] font-black underline">accounts@vpsbazzar.com</span> within the timelines mentioned above.</p>
                <p className="italic text-xs opacity-70">To the fullest extent permitted by applicable law, you hereby waive all claims relating to fees/charges payable/already paid to us unless claimed within the timeline prescribed in this refund policy.</p>
              </div>
            </section>

          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 dark:text-slate-600 font-bold text-xs uppercase tracking-[0.2em]">
          End of Document :: Refund Protocol Ref-BZR-REF-24
        </div>
      </div>
    </div>
  );
};
