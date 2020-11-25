==Certificate Management Inventory.

===Backend APIC <-> IStio.

.Option 1. (preference for simplification need a steer from bank on this. I think one of the benefit of istio is that we do not need to povision individual certs for each microservice.)
  A single unique hostname and URL for each of DP and OB. (current set up).
Currently a single server side certificate & key pair is loaded into Istio ingress gateway for each of DP and OB back end APIS. If we move to mutual authentication we would need an additional cert & key pair for each of DP and OB URL to be loaded into APIC. In this scenario we have single URL for each of DP and OB and the routing of traffic is all managed by the virtualservices within istio.

.Option 2.
  We have a unique hostname and hence a unique set of certs for each microservice.
Each backend MicroService OB\DP has a unqique hostname and unique certs server side certificate & key pair + for mutual authentication a second set of cert & key pair will be required. The server certs will be loaded into the istio ingress gateway along with the intermediatory CA certificate, the client side certs will be loaded into APIC along with the intermediatory signer CA.

.Option 3.
  Somewhere in the middle - some sort of grouping between the microservices
Each grouped unique hostname would require the server client key cert pair.

.ob back end API

ob-productsv2
accounts
ob-payee
ob-cdr-dh-cache
ob-registration
ob-metrics
ob-jams
ob-discovery
ob-cdr-cache
ob-audit
blacklist-adr
ob-common-customers
blacklist-ui-bff (BFF) 
validator
ob-scheduled-payments
ob-direct-debits
wiremock

.DP back end API

accounts-canonical
debits-canonical
party-canonical
payees-canonical
products-canonical
scheduled-payments
transaction-canonical

.OB front end customer facing  Customer <-> UI <-> APIC.
  Currently not clear to me how this works - I beleive there are 2 front end URLs that require customer facing certificates - where\what they sit is not clear to me. It is also not clear to me what is securing the communication between the front end and APIC - not all the front end pods communicate via APIC but some do - this comms to APIC should again be mutual authentication.
I have reached out to Manglu BALASUBRAMANIAN - OB arch to get some more clarity around this - I hope to speak to him next week.

.OB UI microservices.

wiremockconsumer-jams-ui
outages-ui
consumer-dashboard
blacklist-ui
joint-account-management-ui
sample-app
authentication-ui
ob-ui-boilerplatemasterCDR-data-usecase2-UI
authorisation-management-ui

===Istio Service Mesh.
  Behind the istio ingress gateway the service mesh begins. Current proposal would be to enable citidel and let it manage and rotate certificates in this scenario we would require the root CA and an intermediatory CA and KEY pair to sign\rotate certificates with in the mesh.

