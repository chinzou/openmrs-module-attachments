angular.module('vdui.fragment.dashboardWidget', ['obsService', 'vdui.widget.gallery', 'vdui.widget.thumbnail']);

angular.module('vdui.fragment.dashboardWidget').controller('DashboardWidgetCtrl', ['$scope', '$window',
  function($scope, $window) {
    $scope.obsQuery = {
      limit: $window.config.thumbnailCount,
      patient: $window.config.patient.uuid,
      conceptList: $window.config.conceptComplexUuidList.toString() // http://stackoverflow.com/a/202247/321797
    };
  }]);