import { Shield, Users, CheckCircle, RefreshCw, Eye, Clock } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-quant-bg text-slate-100">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-4">
            About Nexus Quant Engine
          </h1>
          <p className="text-lg text-slate-400">
            Your trusted source for quantitative trading insights and SOC 2 compliance guidance
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-accent" />
            Our Editorial Process
          </h2>
          
          <div className="space-y-8">
            <div className="bg-quant-surface border border-quant-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-bullish" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Original Testing
                  </h3>
                  <p className="text-slate-400">
                    Every tool or software reviewed on Nexus Quant Engine is personally tested by our technical team using live Vercel deployments. We don't rely on documentation or second-hand reports—we get our hands dirty with real-world testing scenarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-quant-surface border border-quant-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-bullish" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Fact-Checking
                  </h3>
                  <p className="text-slate-400">
                    We verify all CPC data and compliance regulations against official sources like the AICPA and IAB Tech Lab. Our fact-checking process ensures every statistic, regulation, and technical claim is cross-referenced with authoritative sources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-quant-surface border border-quant-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Eye className="w-6 h-6 text-bullish" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    AI Disclosure
                  </h3>
                  <p className="text-slate-400">
                    While we use AI to assist in data aggregation, 100% of our conclusions, rankings, and technical guides are authored and verified by human experts. AI helps us process vast amounts of data, but human expertise drives our insights and recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-quant-surface border border-quant-border rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-bullish" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    Updating Cadence
                  </h3>
                  <p className="text-slate-400">
                    Technical content is reviewed every 90 days to ensure accuracy with the latest Vercel documentation. Our commitment to freshness means you're always getting current, actionable information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-accent" />
            Our Commitment to Trust
          </h2>
          
          <div className="bg-quant-surface border border-quant-border rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Transparency</h3>
                <p className="text-slate-400">
                  We clearly disclose our testing methodologies, update schedules, and any potential conflicts of interest. Our readers deserve to know exactly how we arrive at our conclusions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Expertise</h3>
                <p className="text-slate-400">
                  Our team consists of certified compliance professionals, DevOps engineers, and quantitative trading experts with real-world experience deploying and securing production applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-slate-400 mb-6">
            Ready to learn more about our compliance solutions?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Contact Our Team
          </a>
        </section>
      </div>
    </div>
  );
}
