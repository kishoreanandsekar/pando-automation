Feature: Pando end to end automation

  Scenario Outline: Complete pando end to end workflow successfully
    Given User navigates to login page
    When User logs in with valid credentials
    Then User should be logged in and verify message "QA Pando - Outbound"
    When User creates an indent with valid details
    Then User should verify indent success message "Indent created with number"
    When User searches with indent number and source depot filter
    Then Created indent should appear in results
    When User navigates to document page and enters valid details
    Then User verifies LR success message "LR number saved successfully"
    When User provides vehicle details to assign vehicle "<truckReg>" "<truckNo>" "<phone>" "<name>" "<length>" "<width>" "<height>"
    Then User verifies assign state success message "Truck assigned for indent"
    When User reports the vehicle arrival
    Then User verifies the reported state with success message "Truck reported at depot for"
    When User provide truck in time details "09-05-2026 09:17PM"
    Then User verifies truck in success message with "Truck arrived for indent"
    When User provide truck out time details "10-05-2026 10:17PM"
    Then User verifies truck out success message with "Truck dispatched for indent"
    When User provide Delivery time details with "<reportedTime>" "<unloadingStart>" "<podDate>" "<unloadingEnd>"
    Then User verifies delivery success message with "Indent number PAND"
    When User approves the consignees
    Then User should verify completed success message "GRN Approved"

    Examples:
      | truckReg | truckNo | phone      | name | length | width | height | reportedTime       | unloadingStart     | podDate            | unloadingEnd       |
      | KA14     |    5553 | 9321654987 | jim  |     90 |    30 |     20 | 11-05-2026 12:00AM | 11-05-2026 12:00AM | 11-05-2026 12:00AM | 11-05-2026 12:00AM |
