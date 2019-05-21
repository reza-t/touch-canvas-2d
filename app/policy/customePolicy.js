flow.myPolicy = {
  shapeFeedback: function(shape) {
    shape.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
  }
}