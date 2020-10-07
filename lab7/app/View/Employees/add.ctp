<div class="employees form">
<?php echo $this->Form->create('Employee');
	  $options = array(
      'dyrektor' =>'dyrektor', 
      'profesor' =>'profesor',
      'adiunkt' => 'adiunkt',
      'asystent' => 'asystent',
      'doktorant' => 'doktorant',
      'sekretarka' => 'sekretarka'
  );
 ?>

	<fieldset>
		<legend><?php echo __('Add Employee'); ?></legend>
	<?php
		echo $this->Form->input('nazwisko');
		echo $this->Form->input('imie');
		echo $this->Form->input('etat', 
		array('options'=>$options, 'default'=>'profesor'));
		echo $this->Form->input('id_szefa');
		echo $this->Form->input('zatrudniony');
		echo $this->Form->input('placa_pod');
		echo $this->Form->input('placa_dod');
		echo $this->Form->input('id_zesp');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Employees'), array('action' => 'index')); ?></li>
	</ul>
</div>
